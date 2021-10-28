<template>
  <div class="default-layout">
    <overlay v-if="overlayActive" />
<!--    <div v-if="currPath && currPath === '/'" class="overlayHome">-->
<!--      <homeOverlay/>-->
<!--    </div>-->
    <loader />
    <div id="viewport" class="w-100 relative">
      <main-header />
      <async-sidebar
        :async-component="SearchPanel"
        :is-open="isSearchPanelOpen"
        @close="$store.commit('ui/setSearchpanel')"
      />
      <async-sidebar
        :async-component="Microcart"
        :is-open="isMicrocartOpen"
        @close="$store.commit('ui/setMicrocart')"
      />
      <async-sidebar
        :async-component="SidebarMenu"
        :is-open="isSidebarOpen"
        @close="$store.commit('ui/setSidebar')"
        direction="left"
      />
      <async-sidebar
        :async-component="Wishlist"
        :is-open="isWishlistOpen"
        @close="$store.commit('ui/setWishlist')"
      />
      <slot />
      <main-footer />
      <notification />
      <sign-up />
      <cookie-notification />
      <offline-badge />
      <order-confirmation :orders-data="ordersData" v-if="loadOrderConfirmation" />
    </div>
    <vue-progress-bar />
  </div>
</template>

<script>
import homeOverlay from 'theme/components/core/homeOverlay.vue'
import { mapGetters, mapState } from 'vuex'
import AsyncSidebar from 'theme/components/theme/blocks/AsyncSidebar/AsyncSidebar.vue'
import MainHeader from 'theme/components/core/blocks/Header/Header.vue'
import MainFooter from 'theme/components/core/blocks/Footer/Footer.vue'
import Overlay from 'theme/components/core/Overlay.vue'
import Loader from 'theme/components/core/Loader.vue'
import Notification from 'theme/components/core/Notification.vue'
import SignUp from 'theme/components/core/blocks/Auth/SignUp.vue'
import CookieNotification from 'theme/components/core/CookieNotification.vue'
import OfflineBadge from 'theme/components/core/OfflineBadge.vue'
import { isServer } from '@vue-storefront/core/helpers'
import Head from 'theme/head'
import config from 'config'
import axios from 'axios';
import rootStore from '@vue-storefront/core/store';
import i18n from '@vue-storefront/i18n';
import { registerModule } from '@vue-storefront/core/lib/modules';
import { MailerModule } from '@vue-storefront/core/modules/mailer'

const SidebarMenu = () => import(/* webpackPreload: true */ /* webpackChunkName: "vsf-sidebar-menu" */ 'theme/components/core/blocks/SidebarMenu/SidebarMenu.vue')
const Microcart = () => import(/* webpackPreload: true */ /* webpackChunkName: "vsf-microcart" */ 'theme/components/core/blocks/Microcart/Microcart.vue')
const Wishlist = () => import(/* webpackPreload: true */ /* webpackChunkName: "vsf-wishlist" */ 'theme/components/core/blocks/Wishlist/Wishlist.vue')
const SearchPanel = () => import(/* webpackChunkName: "vsf-search-panel" */ 'theme/components/core/blocks/SearchPanel/SearchPanel.vue')
const OrderConfirmation = () => import(/* webpackChunkName: "vsf-order-confirmation" */ 'theme/components/core/blocks/Checkout/OrderConfirmation.vue')

export default {
  data () {
    return {
      loadOrderConfirmation: false,
      ordersData: [],
      Microcart,
      Wishlist,
      SearchPanel,
      SidebarMenu
    }
  },
  computed: {
    ...mapState({
      overlayActive: state => state.ui.overlay,
      isSearchPanelOpen: state => state.ui.searchpanel,
      isSidebarOpen: state => state.ui.sidebar,
      isMicrocartOpen: state => state.ui.microcart,
      isWishlistOpen: state => state.ui.wishlist
    }),
    ...mapGetters({
      getCartToken: 'cart/getCartToken'
    }),
    currPath () {
      return this.$router.currentRoute.path
    }
  },
  methods: {
    async checkCartHasItems () {
      let emailResponse
      if (this.getCartToken) {
        this.$store.dispatch('mailer/clearCart', { quote_id: this.getCartToken })
          .then(res => {
            if (res.ok) {
              console.log('checkCartHasItems success', res)
              // if (success) success(i18n.t('Email has successfully been sent'))
            } else {
              console.log('checkCartHasItems failed', res)
              // return res.json()
            }
          })
        // emailResponse = await axios.post('https://secure.w10.world/rest/default/V1/w10/clearcart',
        //   this.getCartToken,
        //   {
        //     headers: {
        //       'Content-type': 'application/json'
        //     }
        //   }
        // );
      }
      console.log('checkCartHasItems', this.getCartToken)
    },
    clearTheCart () {
      if (this.getNumberOfItemsInCart() > 0) {
        rootStore.dispatch('cart/clear', {}, { root: true })
        rootStore.dispatch('cart/serverCreate', { guestCart: false }, { root: true })
      }
    },
    getNumberOfItemsInCart () {
      return this.$store.state.cart.cartItems.length
    },
    // async pullCartSync () {
    //   console.log('pullCartSync called')
    //   await this.$store.dispatch('cart/sync', {
    //     forceClientState: false,
    //     forceSync: true
    //   })
    //   await this.$store.dispatch('cart/syncTotals', { forceServerSync: true })
    //   this.$forceUpdate()
    // },
    onOrderConfirmation (payload) {
      this.loadOrderConfirmation = true
      this.ordersData = payload
      this.$bus.$emit('modal-show', 'modal-order-confirmation')
    },
    fetchMenuData () {
      return this.$store.dispatch('category-next/fetchMenuCategories', {
        level: config.entities.category.categoriesDynamicPrefetch && config.entities.category.categoriesDynamicPrefetchLevel >= 0
          ? config.entities.category.categoriesDynamicPrefetchLevel
          : null,
        skipCache: isServer
      })
    }
  },
  serverPrefetch () {
    return this.fetchMenuData()
  },
  mounted () {
    // this.pullCartSync()
    this.checkCartHasItems()
    // console.log('mounted called default')
  },
  beforeCreate() {
    registerModule(MailerModule)
  },
  beforeMount () {
    // Progress bar on top of the page
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      this.$Progress.increase(40)
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
    this.$bus.$on('offline-order-confirmation', this.onOrderConfirmation)
    // this.$bus.$on('application-after-loaded', (payload) => {
    //   if (document.getElementById('thank_you_external') != null) {
    //     this.clearTheCart()
    //   }
    // })
    // this.$bus.$on('cart-after-itemchanged', (payload) => {
    //   if (document.getElementById('thank_you_external') != null) {
    //     this.clearTheCart()
    //   }
    // })
  },
  beforeDestroy () {
    this.$bus.$off('offline-order-confirmation', this.onOrderConfirmation)
  },
  metaInfo: Head,
  components: {
    homeOverlay,
    MainHeader,
    MainFooter,
    SidebarMenu, // eslint-disable-line vue/no-unused-components
    Overlay,
    Loader,
    Notification,
    SignUp,
    CookieNotification,
    OfflineBadge,
    OrderConfirmation,
    AsyncSidebar
  }
}
</script>

<style lang="scss" src="theme/css/main.scss"></style>
<style scoped>
  .overlayHome{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0.96;
    background-color: #000000;
    z-index: 4;
  }
</style>
