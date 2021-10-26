<template>
  <div>
    <HeaderW10 />
    <div id="thank_you_external">
      <header class="thank-you-title">
        <div class="container center-xs middle-xs">
          <h1>
            {{ $t('Order confirmation') }}
          </h1>
        </div>
      </header>
      <div class="text-center center-xs flex middle-xs w-100">
        <hr/>
      </div>
      <div class="thank-you-content">
        <div class="container">
          <div class="row">
            <div class="col-md-12 pl20 pr20">
              <h3 v-if="OnlineOnly">
                {{ $t('Your purchase') }}
              </h3>
              <p
                v-html="this.$t('You will receive an order confirmation email with details of your order and once dispatched a link to track your parcel’s progress.')"/>
              <p
                v-html="this.$t('E-mail us at <b>contactus@w10.world</b> with any questions or suggestions on how we could improve products or shopping experience')"/>
              <h3>
                {{ $t('Your Account') }}
              </h3>
              <p
                v-html="this.$t('You can log into your account using the e-mail and password setup earlier. On your account you can <b>edit your profile data</b> and check <b>history of transactions</b>.</b>')"/>
            </div>

          </div>
        </div>
      </div>
    </div>
    <FooterW10 />
  </div>
</template>

<script>
import Vue from 'vue'
import Composite from '@vue-storefront/core/mixins/composite'
import Breadcrumbs from 'theme/components/core/Breadcrumbs'
import BaseTextarea from 'theme/components/core/blocks/Form/BaseTextarea'
import ButtonOutline from 'theme/components/theme/ButtonOutline'
import VueOfflineMixin from 'vue-offline/mixin'
import { EmailForm } from '@vue-storefront/core/modules/mailer/components/EmailForm'
import rootStore from '@vue-storefront/core/store'
import fetch from 'isomorphic-fetch';
import HeaderW10 from 'theme/components/core/blocks/Header/Header-w10.vue'
import FooterW10 from 'theme/components/core/blocks/Footer/Footer-w10.vue'

export default {
  name: 'ExternalThankYouPage',
  mixins: [Composite, VueOfflineMixin, EmailForm],
  data () {
    return {
      feedback: ''
    }
  },
  computed: {
    isNotificationSupported () {
      if (Vue.prototype.$isServer || !('Notification' in window)) return false
      return 'Notification' in window
    },
    isPermissionGranted () {
      if (Vue.prototype.$isServer || !('Notification' in window)) return false
      return Notification.permission === 'granted'
    },
    mailerElements () {
      return this.$store.state.config.mailer.contactAddress
    }
  },
  components: {
    HeaderW10,
    FooterW10
    // BaseTextarea,
    // Breadcrumbs,
    // ButtonOutline
  },
  beforeMount () {
    this.$bus.$on('application-after-loaded', (payload) => {
      if (document.getElementById('thank_you_external') != null) {
        this.clearTheCart()
      }
    })
    this.$bus.$on('cart-after-itemchanged', (payload) => {
      if (document.getElementById('thank_you_external') != null) {
        this.clearTheCart()
      }
    })
  },
  metaInfo () {
    return {
      title: this.$route.meta.title,
      meta: [{ vmid: 'description', description: this.$route.meta.description }],
      script: [
        {
          id: 'adwords-conversion',
          src: 'https://www.googletagmanager.com/gtag/js?id=AW-612207016',
          async: true
        }
      ]
    }
  },
  methods: {
    clearTheCart () {
      if (this.getNumberOfItemsInCart() > 0) {
        rootStore.dispatch('cart/clear', {}, { root: true })
        rootStore.dispatch('cart/serverCreate', {guestCart: false}, {root: true})
      }
    },
    getNumberOfItemsInCart () {
      return this.$store.state.cart.cartItems.length
    },
    requestNotificationPermission () {
      if (Vue.prototype.$isServer) return false
      if ('Notification' in window && Notification.permission !== 'granted') {
        Notification.requestPermission()
      }
    },
    sendFeedback () {
      this.sendEmail(
        {
          sourceAddress: this.checkoutPersonalEmailAddress,
          targetAddress: this.mailerElements.contactAddress,
          subject: this.$t('What we can improve?'),
          emailText: this.feedback
        },
        this.onSuccess,
        this.onFailure
      )
    },
    onSuccess (message) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'success',
        message,
        action1: { label: this.$t('OK') }
      })
      if (this.mailerElements.sendConfirmation) {
        this.sendEmail(
          {
            sourceAddress: this.mailerElements.contactAddress,
            targetAddress: this.checkoutPersonalEmailAddress,
            subject: this.$t('Confirmation of receival'),
            emailText: this.$t(`Dear customer,\n\nWe have received your letter.\nThank you for your feedback!`),
            confirmation: true
          }
        )
      }
    },
    onFailure (message) {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message,
        action1: { label: this.$t('OK') }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#thank_you_external ~ .notifications {
  display: none;
}

h1 {
  font-size: 44px;
  font-weight: 100;
  color: black;
  margin: 40px 0 0px 0;
  padding: 0;
  text-transform: uppercase;
}

h3 {
  font-size: 25px;
  font-weight: 300;
  color: black;
  margin: 0px 0 0px 0;
  padding: 0;
  text-transform: uppercase;
}

hr {
  margin: 50px 0;
  padding: 0;
  width: 100px;
  border: 0;
  border-top: 1px solid #98694b;
}

.thank-you-improvment {
  padding: 20px 40px 40px 40px
}

.thank-you-content {
  margin-bottom: 40px;
}

@media (max-width: 767px) {
  hr {
    margin: 30px 0 0 0;
  }
  .thank-you-content {
    margin-top: 0px;
  }
  h1 {
    font-size: 32px;
    font-weight: 100;
    color: black;
    margin: 40px 0 0px 0;
    padding: 0;
  }
}

</style>
