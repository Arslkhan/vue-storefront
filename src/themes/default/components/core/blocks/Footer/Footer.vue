<template>
  <footer :class="{ 'brdr-top-1 brdr-cl-secondary': isCheckoutPage }">
    <!-- <newsletter class=" flex brdr-bottom-1 brdr-cl-secondary" v-if="!isCheckoutPage" /> -->
    <div
      class="footer-links flex pt30 pb60 px40 bg-cl-secondary"
      v-if="!isCheckoutPage"
    >
      <div class="container">
        <div class="row m0 center-xs">
          <div
            class="row m0 col-lg-10 col-md-8 col-xs-12 start-md between-xs no-mobile footer-content"
          >
            <div class="start-md col-md-4 col-xs-12 copyright">
              <span>&copy;{{ copyrightYear }} The W10 Collection</span>
            </div>
            <div class="start-md col-md-8 col-xs-12 cmspages">
              <h5>
                <router-link
                  class="inline-flex weight-500 relative no-underline"
                  :to="localizedRoute('/i/terms-and-conditions')"
                  exact
                >
                  Terms &amp; Conditions
                </router-link>
              </h5>
              <h5>
                <router-link
                  class="inline-flex weight-500 relative no-underline"
                  :to="localizedRoute('/i/privacy-policy')"
                  exact
                >
                  Privacy Policy
                </router-link>
              </h5>
              <h5>
                <router-link
                  class="inline-flex weight-500 relative no-underline"
                  :to="localizedRoute('/i/returns-policy')"
                  exact
                >
                  Returns
                </router-link>
              </h5>
              <h5>
                <router-link
                  class="inline-flex weight-500 relative no-underline"
                  :to="localizedRoute('/contact-us')"
                  exact
                >
                  Contact us
                </router-link>
              </h5>
              <a class="inline-flex weight-500 relative no-underline anchor-costa" href="http://w10.world/">
                <img src="/assets/W10 logo.png" alt="w10logo">
              </a>
            </div>
          </div>
          <div class="row social col-md-2 col-xs-12">
            <div class="social-icons">
              <a href="https://www.facebook.com/CostaCoffee" target="_blank"><span><svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z" fill="#fff" id="fbicon" /></g></svg></span></a>
              <a href="https://twitter.com/CostaCoffee/" target="_blank"><span><svg enable-background="new 0 0 56.693 56.693" height="24px" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z" id="twitter" /></svg></span></a>
              <a href="https://www.youtube.com/user/forcoffeelovers" target="_blank"> <span><svg height="100%" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#fff" d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z" style="fill-rule:nonzero;" id="youtube" /></svg></span></a>
              <a href="https://www.instagram.com/costacoffee/?hl=en" target="_blank"> <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" id="insta" /></svg></span></a>
            </div>
          </div>
          <div class="address-bar col-md-12">
            <span>TIDEWAY YARD UNIT T04,&nbsp;&nbsp;125 MORTLAKE HIGH STREET,&nbsp;&nbsp;LONDON,&nbsp;&nbsp;SW14 8SN</span>
          </div>
          <div class="accepted-cards col-md-12">
            <span><img src="/assets/fonts/amex.svg" alt="amex"></span>
            <span><img src="/assets/fonts/discover.svg" alt="discover"></span>
            <span><img src="/assets/fonts/diners.svg" alt="diners"></span>
            <span><img src="/assets/fonts/jcb.svg" alt="jcb"></span>
            <span><img src="/assets/fonts/mastercard.svg" alt="mastercard"></span>
            <span><img src="/assets/fonts/visa.svg" alt="visa"></span>
            <span><img src="/assets/fonts/pp-acceptance-medium.webp" alt="acceptanc-medium"></span>
          </div>
        </div>
      </div>
      <back-to-top bottom="20px" right="20px" visibleoffset="200">
        <button type="button" class="btn-top button no-outline brdr-none cl-white bg-cl-mine-shaft :bg-cl-th-secondary py10 px10">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" fill="white" />
          </svg>
        </button>
      </back-to-top>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import { currentStoreView, localizedRoute } from '@vue-storefront/core/lib/multistore'
import CurrentPage from 'theme/mixins/currentPage'
import LanguageSwitcher from '../../LanguageSwitcher.vue'
// import Newsletter from 'theme/components/core/blocks/Footer/Newsletter'
import BackToTop from 'theme/components/core/BackToTop'
import { getPathForStaticPage } from 'theme/helpers'
import config from 'config'
import { log } from 'util'

export default {
  mixins: [CurrentPage],
  name: 'MainFooter',
  data () {
    return {
      copyrightYear: ''
    }
  },
  methods: {
    goToAccount () {
      this.$bus.$emit('modal-toggle', 'modal-signup')
    },
    getLinkFor (path) {
      return localizedRoute(getPathForStaticPage(path))
    },
    newYear () {
      this.copyrightYear = new Date().getFullYear();
      return this.copyrightYear;
    }
  },
  mounted () {
    this.newYear();
  },
  computed: {
    ...mapGetters({
      isLogged: 'user/isLoggedIn'
    }),
    multistoreEnabled () {
      return config.storeViews.multistore
    },
    getVersionInfo () {
      return `v${process.env.__APPVERSION__} ${process.env.__BUILDTIME__}`
    }
  },
  components: {
    // Newsletter,
    LanguageSwitcher,
    BackToTop
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-secondary: color(secondary);
.footer-links .container {
  width: 1513px;
  max-width: 100%;
}
.footer-links {
  padding: 0;
  background: #6E2138;
  padding: 27.5px 0;
  @media (max-width:767px) {
     padding: 13px 0;
  }
}
.footer-content {
  align-items: center;
  @media (max-width:1199px) {
    flex-basis: 80%;
    max-width: 80%;
  }
  @media (max-width:992px) {
    flex-basis: 100%;
    max-width: 100%;
  }
  @media (max-width:767px) {
    flex-basis: 100%;
    max-width: 100%;
  }
}
.copyright {
  font-family: 'BrandonMedium';
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  display: flex;
  justify-content: center;
  @media (max-width:1410px) and (min-width: 768px) {
    flex-basis: 29%;
    max-width: 29%;
    justify-content: flex-end;
  }
  @media (max-width:1199px) {
    padding: 0;
    justify-content: flex-start;
    flex-basis: 25%;
    max-width: 25%;
  }
  @media (max-width:992px) {
    flex-basis: 100%;
    max-width: 100%;
    justify-content: center;
  }
  span {
    @media (max-width:1130px) {
      font-size: 16px;
    }
    @media (max-width:992px) {
      font-size: 20px;
    }
  }
}
.cmspages {
  display: flex;
  justify-content: space-around;
  @media (max-width:1410px) and (min-width: 768px) {
    flex-basis: 68%;
    max-width: 68%;
  }
  @media (max-width: 1199px) {
    flex-basis: 75%;
    max-width: 75%;
  }
  @media (max-width:992px) {
    flex-basis: 100%;
    max-width: 100%;
  }
  @media (max-width:767px) {
     flex-direction: column;
     margin-top: 6px;
   }
  h5 {
    font-family: 'BrandonMedium';
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    justify-content: space-around;
    // padding-left: 45px;
    @media (max-width:1030px) {
      font-size: clamp(16px, 1.942vw, 20px);
    }
    @media (max-width:767px) {
      margin: 0 0 4px 0;
   }
    a {
       color: #fff;
    }
  }
  .anchor-costa {
    margin: 17px 0;
      @media (max-width:767px) {
        display: flex;
        flex-basis: 100%;
        max-width: 100%;
        justify-content: center;
      }
    img {
      height: 58px;
      width: 100%;
      @media (max-width:767px) {
        height: 58px;
        width: 124px;
      }
    }
  }
}
.icon {
  transition: 0.3s all;
}
.social {
    justify-content: flex-end;
    align-items: center;
    margin-right: -1px;
    @media (max-width:1410px) and (min-width: 768px) {
      padding: 0;
    }
    @media (max-width:1199px) {
      flex-basis: 20%;
      max-width: 20%;
    }
  @media (max-width:992px) {
    flex-basis: 100%;
    max-width: 100%;
    justify-content: center;

  }
  @media (max-width:767px) {
    flex-basis: 100%;
    max-width: 100%;
    justify-content: center;
  }
  .social-icons {
    span {
      svg {
      width: 27px;
      fill: #fff;
      cursor: pointer;
      padding: 0 9px;
      }
    }
  }
}
.address-bar {
  padding-top: 8px;
  display: flex;
  justify-content: center;
  span {
    color: #fff;
    font-family: 'BrandonMedium';
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
  }
}

.accepted-cards {
  display: flex;
  justify-content: center;
  padding-top: 30px;
  span {
    img {
      width: 50px;
      margin-left: 3px;
      @media (max-width:420px) {
        width: 35px;
      }
    }
  }
}
// .social-icon {
//   width: 40px;
//   height: 40px;
//   &:hover,
//   &:focus,
//   &:active {
//     .icon {
//       fill: $color-secondary;
//     }
//   }
// }
.links {
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}

.bottom-links {
  @media (max-width: 767px) {
    padding: 0;
  }
}

.footer__version-info {
  display: flex;
  color: $color-secondary;
  font-size: 0.7rem;
  @media (min-width: 768px) {
    margin-right: 1rem;
    font-size: 0.8rem;
  }
}

.underline {
  &:hover {
    color: $color-secondary;
    &:after {
      background-color: $color-secondary;
    }
  }
}
.legal-entity-link {
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
}

.privacy-policy-link {
  text-align: right;
  @media (min-width: 768px) {
    display: none;
  }
}

// @media (max-width: 595px) {
//   .no-mobile {
//     display: none;
//   }

//   .social {
//     margin-top: 0;
//   }

//   .footer-links {
//     padding-bottom: 30px;
//   }
// }
#fbicon {
  fill:  #3b5998;
}
#twitter {
  fill: #00acee;
}
#youtube {
  fill: rgb(255, 0, 0);
}
#insta {
  fill: #fbad50;
}
a.underline:after, a:not(.no-underline):hover:after {
  content: none;
}
</style>
