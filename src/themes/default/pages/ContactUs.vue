<template>
  <div class="contact-main">
    <p class="head">
      Contact us
    </p>
    <p><img src="/assets/contactbanner.png" alt="facebook"></p>
    <div class="main-fields">
      <p class="button-under-text" style="font-size: 28px; text-align: center;">
        RETURNS? PLEASE REFER TO OUR <a style="font-weight: 800; text-decoration: underline;" href="/i/returns-policy">RETURNS POLICY PAGE</a>
      </p>
    </div>
    <p class="message" style="font-size: 28px;">
      <strong>SEND A MESSAGE OR CALL US ON 0800 012 6406</strong>
    </p>
    <form id="contact" action="" method="">
      <div class="name-fields">
        <fieldset>
          <input placeholder="First Name" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
          <input placeholder="Last Name" type="text" tabindex="1" required autofocus>
        </fieldset>
      </div>
      <div class="email-phone">
        <fieldset>
          <input placeholder="Email Address" type="email" tabindex="2" required>
        </fieldset>
        <fieldset>
          <input placeholder="Phone Number" type="tel" tabindex="3" required>
        </fieldset>
      </div>
      <!-- <fieldset>
        <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required>
      </fieldset> -->
      <div class="message-field">
        <fieldset>
          <textarea placeholder="Message" tabindex="5" required />
        </fieldset>
      </div>
      <fieldset class="button">
        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
          Send Message
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { registerModule } from '@vue-storefront/core/lib/modules'
import { MailerModule } from '@vue-storefront/core/modules/mailer'
import { EmailForm } from '@vue-storefront/core/modules/mailer/components/EmailForm'
import i18n from '@vue-storefront/i18n'
import config from 'config';

export default {
  data () {
    return {
      PageName: 'Contact Us',
      form: null,
      submitBtn: null,
      successBtnBox: null
    };
  },
  beforeCreate () {
    registerModule(MailerModule)
  },
  computed: {
    sourceAddress () {
      return config.mailer.sourceAddress
    },
    cmsPageContent () {
      return this.$store.state.cmsPage.current;
    },
    contactFormEmailAddress () {
      return config.mailer.targetAddress
    },
    contactFormSubject () {
      return 'General Inquiries'
    }
  },
  methods: {
    successMessage () {
      return '<div data-v-53963ae7="" class="col-xs-12 confirmation"><h3 data-v-53963ae7="" class="py15 px10 my40 weight-600 flex cl-white lightGreybar brdr-rad"><i data-v-53963ae7="" class="material-icons">check_circle_outline</i> Your message has successfully been sent.</h3></div>'
    },
    sendEmail (letter, success, failure) {
      this.$store.dispatch('mailer/sendEmail', letter)
        .then(res => {
          if (res.ok) {
            if (success) success(i18n.t('Email has successfully been sent'))
          } else {
            return res.json()
          }
        })
        .then(errorResponse => {
          if (errorResponse) {
            const errorMessage = errorResponse.result
            if (failure) failure(i18n.t(errorMessage))
          }
        })
        .catch(() => {
          if (failure) failure(i18n.t('Could not send an email. Please try again later.'))
        })
    },
    formBodyText ({ firstName, lastName, email, phone, subject }) {
      let html = '';

      html += 'Name: ' + firstName + ' ' + lastName + '\r\n\r\n'
      html += 'Email Address: ' + email + '\r\n\r\n'
      if (phone) {
        html += 'Phone Number: ' + phone + '\r\n\r\n'
      }
      if (this.subject) {
        html += 'Subject: ' + subject + '\r\n\r\n'
      }
      html += 'Message: ' + subject + '\r\n\r\n'

      return html
    },

    onSuccess (message) {
      this.messageSent = true
      this.form.remove();
      this.submitBtn.remove();
      this.successBtnBox.innerHTML = this.successMessage();

      if (config.mailer.sendConfirmation) {
        let confirmationHtml = '';
        confirmationHtml += 'Dear customer,\r\n\r\n'
        confirmationHtml += 'We have received your request.\r\n\r\n'
        confirmationHtml += 'Thank you!'

        this.sendEmail(
          {
            sourceAddress: this.sourceAddress,
            targetAddress: this.contactFormEmailAddress,
            subject: this.$t('Confirmation of receival'),
            emailText: confirmationHtml,
            confirmation: true
          })
      }
    },
    onFailure (message) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message,
        action1: { label: this.$t('OK') }
      })
    }
  },
  updated () {
    let contactForm = document.querySelector('div#contact-us-form');
    console.log('contactFormWouldBe', contactForm);
  },
  mounted () {
    if (this.cmsPageContent.title === this.PageName) {
      this.form = document.querySelector('div#contact-us-form');
      this.submitBtn = document.querySelector('button.button-contact');
      this.successBtnBox = document.querySelector('div.buttonmessage');
      console.log('submitBtn', this.successBtnBox);
      // form.addEventListener('submit', (e) => {
      //   e.preventDefault();
      //   const formData = new FormData(e.target);
      //   console.log('FormDataWouldBe', formData);
      //   // Now you can use formData.get('foo'), for example.
      //   // Don't forget e.preventDefault() if you want to stop normal form .submission
      // });
      document.querySelector('button.button-contact').onclick = () => {
        // let firstName = document.querySelector("input[name='fname']");
        let firstName = document.getElementById('fname').value;
        let lastName = document.getElementById('lname').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let message = document.getElementById('message').value;
        console.log('firstName', firstName, lastName, email, phone, message);
        let formBodyText = this.formBodyText({ firstName, lastName, email, phone, subject: this.contactFormSubject })
        let data = {
          sourceAddress: this.sourceAddress,
          replyAddress: email,
          targetAddress: this.contactFormEmailAddress,
          emailText: formBodyText,
          confirmation: true,
          subject: this.contactFormSubject
        };
        if (firstName && lastName && email && phone && message) {
          this.sendEmail(
            data,
            this.onSuccess,
            this.onFailure
          )
        }


        console.log('firstName', data);
        // form.submit();
      }
      // let contactForm = document.getElementById('contact-us-form');
      // let formData = new FormData(contactForm)
      // console.log('formSHouldBe', contactForm, formData);
      console.log('its a contact Us page.');
    }
  },
  mixins: [EmailForm]
}
</script>

<style lang="scss" scoped>
fieldset {
  border: none;
  width: 100%;
}
.name-fields,.email-phone,.message-field {
  display: flex;
  @media (max-width: 600px) {
    flex-flow: column;
  }
}
#contact {
  padding: 0 170px;
  @media (max-width: 992px) {
    padding: 0 52px 0 28px;
  }
}
#contact-submit {
  background: #6d1f37;
  height: 61px;
  width: 100%;
  max-width: 251px;
  border-radius: 50px;
  border: none;
  color: #fff;
  font-family: Brandon_bld;
  font-size: 18px;
  font-weight: 900;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
input {
  border: 1px solid #828282;
  border-left: none;
  border-right: none;
  border-top: none;
  width: 100%;
  outline: 0;
  font-family: Brandon_reg;
  font-weight: 700;
  font-size: 20px;
}
textarea {
  border: 1px solid #828282;
  border-left: none;
  border-right: none;
  border-top: none;
  width: 100%;
  margin-top: 15px;
  outline: 0;
  resize: unset;
  font-size: 20px;
  font-family: Brandon_reg;
  font-weight: 700;
  @media (max-width: 767px) {
    width: 100%;
  }
}
.button {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 90px;
  padding-bottom: 60px;
}
a.underline:after, a:not(.no-underline):hover:after {
  content: none;
}
.contact-main {
    margin-top: -15px;
  .head {
    color: #6e2138;
    margin: 0;
    padding-top: 8px;
    // font-size: 47px;
    font-size: clamp(36px, 6.2vw, 72px);
    font-family: "Brandon_bld";
    position: absolute;
    left: 43%;
    @media (max-width: 500px) {
      left: 35%;
    }
  }
  .main-fields {
      .button-under-text {
    color: #6d1f37;
    font-size: 28px;
    font-family: "Brandon_reg";
    text-align: center;
    font-weight: 700;
    a {
      color: #6d1f37;
      font-size: 28px;
      font-family: "Brandon_reg";
      text-align: center;
      font-weight: 700;
      text-decoration: underline;
     }
    }
  }

  p {
    img {
      width: 100%;
    }
  }

  .message {
    color: #6d1f37;
    font-size: 24px;
    font-family: "Brandon_reg";
    text-align: center;
    font-weight: 700;
    padding-bottom: 10px;
  }

  .form {
    .main-fields {
      padding: 0px 170px;
      @media (max-width: 1199px) {
        padding: 0px 80px;
      }
      @media (max-width: 767px) {
        padding: 0px 30px;
      }

      .main-fields-1 {
        display: flex;
        @media (max-width: 767px) {
          flex-direction: column;
        }

        #fname {
          margin-right: 8px;
          @media (max-width: 767px) {
            margin: 0;
          }
        }

        #lname {
          margin-left: 8px;
          @media (max-width: 767px) {
            margin: 0;
          }
        }
      }

      .main-fields-2 {
        display: flex;
        margin-top: 9px;
        @media (max-width: 767px) {
          flex-direction: column;
          margin-top: 0;
        }

        #email {
          margin-right: 8px;
          @media (max-width: 767px) {
            margin: 0;
          }
        }

        #phone {
          margin-left: 8px;
          @media (max-width: 767px) {
            margin: 0;
          }
        }
      }
      input::placeholder {
        font-weight: bold;
      }
    }
    #message::placeholder {
      font-weight: bold;
    }
  }

  .buttonmessage {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 90px;
    @media screen and (max-width: 1024px) {
      margin-top: 60px;
    }
    @media screen and (max-width: 767px) {
      margin-top: 40px;
    }

    button {
      background: #6d1f37;
      height: 61px;
      width: 100%;
      max-width: 251px;
      border-radius: 50px;
      border: none;
      color: #fff;
      font-family: "Brandon_bld";
      font-size: 18px;
      font-weight: 900;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .return-text-form {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    padding-bottom: 30px;

    p {
      font-family: "BrandonMedium";
      font-size: 24px;
      @media screen and (max-width: 767px) {
        font-size: 18px;
      }

      a {
        color: #6d1f37;
        font-family: "BrandonMedium";
        font-size: 24px;
        padding-left: 3px;
        cursor: pointer;
        font-weight: 700;
        @media screen and (max-width: 767px) {
          font-size: 18px;
        }
      }

      a.underline:after,
      a:not(.no-underline):hover:after {
        content: none;
      }
    }
  }
}
</style>
