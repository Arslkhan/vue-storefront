<template>
  <div class="contact-main">
    <p class="head">
      Contact us
    </p>
    <p class="contactUsP">
      <img src="/assets/contact_us_image.jpg" alt="contact-us" class="Desktop-banner">
      <img src="/assets/contact-mobile.png" alt="contact-us" class="mobile-banner">
    </p>
    <div class="main-fields">
      <p class="button-under-text" style="font-size: 28px; text-align: center;">
        RETURNS? PLEASE REFER TO OUR <a style="font-weight: 800; text-decoration: underline;" href="/i/returns-policy">RETURNS
        POLICY PAGE</a>
      </p>
    </div>
    <template v-if="!messageSent">
      <p class="message" style="font-size: 28px;">
        <strong>SEND A MESSAGE OR CALL US ON 0800 012 6406</strong>
      </p>
      <form id="contact" @submit.prevent="submitForm">
        <div class="name-fields">
          <fieldset>
            <base-input
              type="text"
              name="first-name"
              v-model="firstName"
              @blur="$v.firstName.$touch()"
              :placeholder="$t('First name')"
              :validations="[
              {
                condition: !$v.firstName.required && $v.firstName.$error,
                text: $t('Field is required.')
              },
              {
                condition: !$v.firstName.minLength,
                text: $t('Name must have at least 2 letters.')
              },
              {
                condition: !$v.firstName.alpha && $v.firstName.$error,
                text: $t('Accepts only alphabet characters.')
              }
            ]"
            />
          </fieldset>
          <fieldset>
            <base-input
              type="text"
              name="last-name"
              v-model="lastName"
              @blur="$v.lastName.$touch()"
              :placeholder="$t('Last name')"
              :validations="[
              {
                condition: !$v.lastName.required && $v.lastName.$error,
                text: $t('Field is required.')
              },
              {
                condition: !$v.lastName.alpha && $v.lastName.$error,
                text: $t('Accepts only alphabet characters.')
              }
            ]"
            />
          </fieldset>
        </div>
        <div class="email-phone">
          <fieldset>
            <base-input
              type="email"
              name="email"
              autocomplete="email"
              v-model="email"
              @blur="$v.email.$touch()"
              focus
              :placeholder="$t('Email Address')"
              :validations="[
            {
              condition: !$v.email.required && $v.email.$error,
              text: $t('Field is required.')
            },
            {
              condition: !$v.email.email && $v.email.$error,
              text: $t('Please provide valid e-mail address.')
            }
          ]"
            />
          </fieldset>
          <fieldset>
            <base-input
              type="text"
              name="phone"
              :placeholder="`${$t('Phone Number')}`"
              v-model.trim="phone"
              :validations="[
              {
                condition: $v.phone.$error && !$v.phone.required,
                text: $t('Field is required')
              }
            ]"
              autocomplete="tel"
              @blur="$v.phone.$touch()"
            />
          </fieldset>
        </div>
        <div class="message-field">
          <fieldset>
            <base-textarea
              type="text"
              :placeholder="$t('Message')"
              v-model="message"
              @blur="$v.message.$touch()"
              :validations="[
                  {
                    condition: $v.message.$error && !$v.message.required,
                    text: $t('Field is required')
                  }
                ]"
            />
          </fieldset>
        </div>
        <fieldset class="button">
          <button-full :disabled="$v.$invalid" id="contact-submit" type="submit">
            {{ $t('Send Message') }}
          </button-full>
        </fieldset>
      </form>
    </template>
    <template v-else>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 confirmation">
            <h3 class="py15 px10 my40 weight-600 flex cl-white color-success brdr-rad"><i class="material-icons">check_circle_outline</i>
              {{ $t('Your message has successfully been sent.') }}</h3>
            <!-- <router-link :to="localizedRoute('/')" :title="$t('Home')" class="no-underline inline-flex">{{ $t('Home') }}</router-link> -->
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { registerModule } from '@vue-storefront/core/lib/modules'
import { MailerModule } from '@vue-storefront/core/modules/mailer'
import { EmailForm } from '@vue-storefront/core/modules/mailer/components/EmailForm'
import i18n from '@vue-storefront/i18n'
import config from 'config';
import BaseInput from 'theme/components/core/blocks/Form/BaseInput.vue'
import ButtonFull from 'theme/components/theme/ButtonFull'
import { required, email, minLength, alpha } from 'vuelidate/lib/validators'
import BaseTextarea from 'theme/components/core/blocks/Form/BaseTextarea'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      messageSent: '',
      form: null,
      submitBtn: null,
      successBtnBox: null
    };
  },
  components: {
    ButtonFull,
    BaseInput,
    BaseTextarea
  },
  validations: {
    email: {
      required,
      email
    },
    firstName: {
      minLength: minLength(2),
      required,
      alpha
    },
    lastName: {
      required,
      alpha
    },
    phone: {
      required
    },
    message: {
      required
    }
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
    submitForm () {
      let firstName = this.firstName
      let lastName = this.lastName
      let email = this.email
      let phone = this.phone
      let message = this.message
      let formBodyText = this.formBodyText({ firstName, lastName, email, phone, subject: this.contactFormSubject, message })
      let data = {
        sourceAddress: this.sourceAddress,
        replyAddress: email,
        targetAddress: this.contactFormEmailAddress,
        emailText: formBodyText,
        confirmation: true,
        subject: this.contactFormSubject
      };
      if (!this.$v.$invalid) {
        this.sendEmail(
          data,
          this.onSuccess,
          this.onFailure
        )
      }
    },
    sendEmail (letter, success, failure) {
      this.$store.dispatch('mailer/sendContactEmail', letter)
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
    formBodyText ({ firstName, lastName, email, phone, subject, message }) {
      let html = '';

      html += 'Name: ' + firstName + ' ' + lastName + '\r\n\r\n'
      html += 'Email Address: ' + email + '\r\n\r\n'
      if (phone) {
        html += 'Phone Number: ' + phone + '\r\n\r\n'
      }
      if (this.subject) {
        html += 'Subject: ' + subject + '\r\n\r\n'
      }
      html += 'Message: ' + message + '\r\n\r\n'

      return html
    },

    onSuccess (message) {
      console.log('messageForSuccess', message);
      this.messageSent = true

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
  mixins: [EmailForm]
}
</script>

<style lang="scss" scoped>
@media (min-width: 768px)  {
  .mobile-banner {
    display: none;
  }
  .head {
    left: 45% !important;
  }
}
@media (max-width: 767px) {
  .mobile-banner {
    display: block;
    top: 164% !important;
  }
  .main-fields {
    padding-top: 65%;
    // @media (max-width: 350px) {
    //   padding-top: 182px;
    // }
  }
  .button-under-text {
    font-size: 20px !important;
    font-family: 'BrandonMedium' !important;
    padding: 0 20px;
    line-height: 1.8;
    a {
      font-size: 20px !important;
      font-family: 'BrandonMedium' !important;
    }
  }
  .message {
    margin-top: -13px;
    strong {
      font-size: 20px !important;
      font-family: 'BrandonMedium' !important;
      line-height: 0;
      padding: 0 20px;

    }
  }
  .Desktop-banner {
    display: none;
  }
}
.color-success {
  background-color: #c0c0c0;
}

fieldset {
  border: none;
  width: 100%;
}

.name-fields, .email-phone, .message-field {
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
     font-size: 44px;
    //font-size: clamp(36px, 6.2vw, 72px);
    font-family: "Brandon_bld";
    position: absolute;
    left: 43%;
    z-index: 1;
    @media (max-width: 500px) {
      left: 28%;
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

  .contactUsP {
    img {
      width: 100%;
      height: auto;
      position: absolute;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
    }
    padding-bottom: 27%;
    position: relative;
    @media (max-width: 767px) {
      padding-bottom: 30.5%;
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
