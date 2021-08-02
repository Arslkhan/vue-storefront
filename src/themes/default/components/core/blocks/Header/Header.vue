/* eslint-disable no-trailing-spaces */
<template>
  <div class="header">
    <header
      class="fixed w-100 brdr-bottom-1 bg-cl-primary brdr-cl-secondary"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="container px15">
        <div class="row between-xs middle-xs" v-if="!isCheckoutPage || isThankYouPage">
          <div class="col-md-4 col-xs-1 middle-xs hidden-md">
            <div class="ham-main">
              <hamburger-icon class="p15 icon pointer ham-button hidden-md" />
            </div>
          </div>
          <div class="col-xs-2 visible-xs hidden">
            <search-icon class="p15 icon pointer" />
          </div>
          <div class="col-md-5 col-xs-7 center-xs pt5 logo-group">
            <div>
              <logo width="auto" height="66px" class="logo-main" />
            </div>
          </div>
          <div class="col-md-4 hidden-xs center-xs headerlink">
            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/our-range.html')"
              exact
            >
              Our Range
            </router-link>
            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/about-us')"
              exact
            >
              About us
            </router-link>
            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/contact-us')"
              exact
            >
              Contact us
            </router-link>
          </div>
          <div class="col-xs-2 visible-xs hidden">
            <wishlist-icon class="p15 icon pointer" />
          </div>
          <div class="col-md-3 col-xs-4 end-xs icons-group">
            <div class="inline-flex">
              <search-icon class="p15 icon pointer hidden" />
              <wishlist-icon class="p15 icon hidden-xs pointer wishicon" />
              <compare-icon class="p15 icon hidden-xs pointer" />
              <microcart-icon class="p15 icon pointer carticon" />
              <account-icon class="p15 icon hidden-xs pointer" />
            </div>
            <div class="social-icons">
              <span><img src="/assets/fonts/fb.svg" alt="facebook"></span>
              <span><img src="/assets/fonts/twitter.svg" alt="twitter"></span>
              <span><img src="/assets/fonts/youtube.svg" alt="youtube"></span>
              <span><img src="/assets/fonts/insta.svg" alt="instagram"></span>
            </div>
          </div>
        </div>
        <div class="row between-xs middle-xs px15 py5" v-if="isCheckoutPage && !isThankYouPage">
          <div class="col-xs-5 col-md-3 middle-xs">
            <div>
              <router-link
                :to="localizedRoute('/')"
                class="cl-tertiary links"
              >
                {{ $t('Return to shopping') }}
              </router-link>
            </div>
          </div>
          <div class="col-xs-2 col-md-6 center-xs">
            <logo width="auto" height="41px" />
          </div>
          <div class="col-xs-5 col-md-3 end-xs">
            <div>
              <a
                v-if="!currentUser"
                href="#"
                @click.prevent="gotoAccount"
                class="cl-tertiary links"
              >{{ $t('Login to your account') }}</a>
              <span v-else>{{ $t('You are logged in as {firstname}', currentUser) }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CurrentPage from 'theme/mixins/currentPage'
import AccountIcon from 'theme/components/core/blocks/Header/AccountIcon'
import CompareIcon from 'theme/components/core/blocks/Header/CompareIcon'
import HamburgerIcon from 'theme/components/core/blocks/Header/HamburgerIcon'
import Logo from 'theme/components/core/Logo'
import MicrocartIcon from 'theme/components/core/blocks/Header/MicrocartIcon'
import SearchIcon from 'theme/components/core/blocks/Header/SearchIcon'
import WishlistIcon from 'theme/components/core/blocks/Header/WishlistIcon'

export default {
  name: 'Header',
  components: {
    AccountIcon,
    CompareIcon,
    HamburgerIcon,
    Logo,
    MicrocartIcon,
    SearchIcon,
    WishlistIcon
  },
  mixins: [CurrentPage],
  data () {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54
    }
  },
  computed: {
    ...mapState({
      isOpenLogin: state => state.ui.signUp,
      currentUser: state => state.user.current
    }),
    isThankYouPage () {
      return this.$store.state.checkout.isThankYouPage
        ? this.$store.state.checkout.isThankYouPage
        : false
    }
  },
  beforeMount () {
    window.addEventListener(
      'scroll',
      () => {
        this.isScrolling = true
      },
      { passive: true }
    )

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled()
        this.isScrolling = false
      }
    }, 250)
  },
  methods: {
    gotoAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    },
    hasScrolled () {
      this.scrollTop = window.scrollY
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false
      } else {
        this.navVisible = true
      }
      this.lastScrollTop = this.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-icon-hover: color(secondary, $colors-background);
.header {
  height: 9.375rem;
  .container {
    width: 1513px;
    max-width: 100%;
    .ham-main {
      .ham-button {
        @media (max-width:480px) {
        padding: 0 0 0 3px;
      }
      }
    }
    .logo-group {
      height: 9.375rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      @media (max-width:767px) {
        justify-content: center;
      }
      @media (max-width:480px) {
        padding-left: 0;
      }
      .logo-main {
        padding: 0 0 0 122px;
        @media (max-width:1199px) {
          padding: 0 0 0 19px;
        }
        @media (max-width:480px) {
          padding: 0 0 0 31px;
        }
      }
    }
    .headerlink {
      display: flex;
      justify-content: space-evenly;
      @media (max-width: 767px) {
        display: none;
      }
      a {
        color: #fff;
        font-family: 'BrandonMedium';
        font-size: 22px;
        @media (max-width: 900px) { 
          font-size: 18px;
        }

      }
    }
    .icons-group {
      align-self: baseline;
      @media (max-width: 767px) {
        align-self: center;
        flex-basis: 28%;
      }
      @media (max-width:480px) {
        padding: 0;
        flex-basis: 28%;
      }
      .wishicon {
        display: flex;
        order: 2;
        @media (max-width:480px) {
          padding: 0 10px 0 0;
        }
      }
      .carticon {
        display: flex;
        order: 3;
        @media (max-width:480px) {
          padding: 0 10px 0 0;
        }
      }
    }
    .social-icons {
      display: flex;
      justify-content: flex-end;
      padding: 0 7px 0 0;
      @media (max-width: 767px) {
        display: none;
      }
      span {
        padding: 0 9px;
        cursor: pointer;
        img {
          width: 26px;
          fill: #fff;
           cursor: pointer;
        }
      }
    }
  }
}
header {
  height: 150px;
  top: -55px;
  z-index: 3;
  transition: top 0.2s ease-in-out;
  background: #6d1f37ff;
  &.is-visible {
    top: 0;
  }
}
// .icon {
//   opacity: 0.6;
//   &:hover,
//   &:focus {
//     background-color: none;
//     opacity: 1;
//   }
// }
.right-icons {
  //for edge
  float: right;
}
.header-placeholder {
  height: 54px;
}
.links {
  text-decoration: underline;
}
@media (max-width: 767px) {
  .row.middle-xs {
    margin: 0 -15px;

    &.py5 {
      margin: 0;
    }
  }
  .col-xs-2:first-of-type {
    padding-left: 0;
  }
  .col-xs-2:last-of-type {
    padding-right: 0;
  }
  a,
  span {
    font-size: 12px;
  }
}
</style>
<style lang="scss">
@media (max-width:900px) { 
  .main-logo {
    img  {
      width: 100%;
    }
  }
}
@media (max-width:767px) {
  .main-logo {
    img  {
      width: 100%;
    }
  }
}
</style>
