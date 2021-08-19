<template>
  <div id="cms-page">
    <header class="bg-cl-secondary py35 pl20">
      <div class="container">
        <div class="row middle-sm">
          <h1 class="col-sm-9 category-title mb10">
            {{ cmsPageContent.title }}
          </h1>
        </div>
      </div>
    </header>

    <div
      class="container-fluid pb60"
      v-if="cmsPageContent.title === PageName"
      v-html="cmsPageContent.content"
    />
    <div class="container pb60" v-else v-html="cmsPageContent.content"/>
  </div>
</template>

<script>
import CmsPage from '@vue-storefront/core/pages/CmsPage';
import i18n from '@vue-storefront/i18n'
import { EmailForm } from '@vue-storefront/core/modules/mailer/components/EmailForm'
import config from 'config';
import { registerModule } from '@vue-storefront/core/lib/modules'
import { MailerModule } from '@vue-storefront/core/modules/mailer'

export default {
  data () {
    return {
      PageName: 'Contact Us',
      form: null,
      submitBtn: null,
      successBtnBox: null
    };
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
  beforeCreate () {
    registerModule(MailerModule)
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
  mixins: [CmsPage, EmailForm]
};
</script>
<style lang="scss">
#cms-page {
  .Faq-Page {
    .faq-mainHeading {
      font-family: 'BrandonMedium';
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      color: #6D1F37;
      @media(max-width: 767px) {
        font-size: 32px;
      }
    }

    .faq-subHeadings {
      font-family: 'BrandonMedium';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #000000;
    }

    p, ol, ul {
      font-family: 'BrandonMedium';
      font-style: normal;
      font-size: 20px;
      color: #000000;
    }

    .Faq-Table {
      width: 100%;

      .table-h span {
        font-weight: 700 !important;
      }
    }
  }
  .lightGreybar {
    color: #c0c0c0;
  }
  .container-fluid {
    padding: 0;
    margin-top: -15px;
  }

  .contact-us-info {
    height: 100vh;
  }

  header {
    display: none;
  }

  @media (max-width: 580px) {
    img {
      width: 100%;
    }
  }

  .container {
    width: 1513px;
    max-width: 100%;
    padding: 0 127px;
    @media (max-width: 1199px) {
      padding: 0 27px;
    }
  }
}

.address {
  p {
    margin: 0;
    line-height: 1.6;
  }
}

.main-returns {
  padding: 0 0 29px 0;

  h4 {
    font-family: "Brandon_reg";
  }

  p {
    font-family: "BrandonMedium";
    font-size: 20px;
    line-height: 28px;
  }

  .returns-head {
    color: #6e2138;
    font-family: "Brandon_bld";
    font-size: 32px;
    margin-bottom: 0;
    text-transform: uppercase;
  }

  .group-p p {
    margin: 0;
  }

  .days-year {
    margin-top: 32px;
  }

  .paragraph2 {
    display: none;
  }

  a.underline:after,
  a:not(.no-underline):hover:after {
    content: none;
  }

  a {
    color: #6e2138;
    cursor: pointer;
    text-decoration: underline;
  }

  .unused {
    a {
      color: #6e2138;
      cursor: pointer;
      text-decoration: none;
    }
  }
}

.privacy-main {
  h6 {
    margin: 0;
    font-size: 16px;
    font-weight: 100;
    font-family: "Raleway-Regular";
    padding-bottom: 83px;
    line-height: 1.8;
  }

  p {
    font-weight: bold;
    font-family: "Raleway-Regular";
  }
}

.terms-and-condition {
  p,
  h2,
  ul,
  li,
  span {
    font-family: "Raleway-Regular";
  }

  p {
    line-height: 1.8;
  }
}
.main-terms {
  padding-bottom: 178px;

  .termh2 {
    color: #6d1f37;
    font-family: "BrandonMedium";
    font-weight: bold;
    font-size: 40px;
  }

  ol li::marker {
    color: #fff;
  }

  ol {
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;

    span {
      font-size: 22px;
      font-family: "BrandonMedium";
      font-weight: 500 !important;
      line-height: 28.6px;
    }
  }

  p {
    font-family: "BrandonMedium";
    font-size: 22px;
    font-weight: 500 !important;
    margin: 0;
    line-height: 28.6px;
  }

  .terms-top {
    margin-top: 50px;
    font-size: 20px;
    margin-bottom: 0;
  }

  strong {
    font-weight: 400;
  }

  span {
    line-height: 25px;
  }

  .term-top2,
  .term-top3,
  .term-top4 {
    margin: 0;
    font-size: 22px;
    font-family: "BrandonMedium";
    font-weight: 500 !important;
  }
}

.main-policy {
  padding: 0 0 116px 0;

  .img-costa {
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  h2 {
    color: #6e2138;
    font-family: "Brandon_bld";
    font-size: 35px;
    margin-bottom: 58px;
    text-transform: capitalize;
  }

  p {
    font-family: "BrandonMedium";
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin: 0;
  }

  p.Headingtop {
    margin: 44px 0 0 0;
    font-family: "Brandon_bld";
    /* font-weight: 900; */
  }

  p.paragraph2,
  p.paragraph5 {
    margin: 0 0 38px 0;
  }

  p.paragraph7 {
    margin: 58px 0 38px 0;
  }

  p.opt,
  p.paragraph10,
  .paragraphcali,
  .paragraphsome,
  .cookies14,
  .cookies126,
  .cookies12once,
  .cookies12promo,
  .cookies12legal {
    margin: 0 0 38px 0;
  }
}

</style>
