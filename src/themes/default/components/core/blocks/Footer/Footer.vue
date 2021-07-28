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
            class="row m0 col-lg-7 col-md-8 col-xs-12 start-md between-xs no-mobile footer-content"
          >
            <div class="start-md col-md-4 copyright">
              <span>&copy;{{ copyrightYear }} The W10 Collection</span>
            </div>
            <div class="start-md col-md-8 cmspages">
              <h5>Terms &amp; Conditions</h5>
              <h5>Privacy Policy</h5>
              <h5>Returns</h5>
            </div>
          </div>
          <div class="row social col-md-4">
            <div class="social-icons">
              <span><img src="/assets/fonts/fb.svg" alt="facebook"></span>
              <span><img src="/assets/fonts/twitter.svg" alt="twitter"></span>
              <span><img src="/assets/fonts/youtube.svg" alt="youtube"></span>
              <span><img src="/assets/fonts/insta.svg" alt="instagram"></span>
            </div>
          </div>
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
      copyrightYear:''
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
}
.footer-content {
  align-items: center;
  @media (max-width:1199px) {
    flex-basis: 64%;
    max-width: 64%;
  }
  @media (max-width:800px) {
    flex-basis: 70%;
    max-width: 70%;
  }
}
.copyright {
  font-family: 'BrandonMedium';
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  padding-left: 41px;
  @media (max-width:1410px) and (min-width: 768px) {
    flex-basis: 40%;
    max-width: 40%;
  }
  @media (max-width:1199px) {
    padding: 0;
  }
  @media (max-width:1030px) {
    font-size: clamp(16px, 1.942vw, 20px);
  }
}
.cmspages {
  display: flex;
  justify-content: space-evenly;
  @media (max-width:1410px) and (min-width: 768px) {
    flex-basis: 60%;
    max-width: 60%;
  }
  h5 {
    font-family: 'BrandonMedium';
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    @media (max-width:1030px) {
      font-size: clamp(16px, 1.942vw, 20px);
    }
  }
}
.icon {
  transition: 0.3s all;
}
.social {
    justify-content: flex-end;
    align-items: center;
  @media (max-width:800px) {
    flex-basis: 30%;
    max-width: 30%;
  }
  .social-icons {
    span {
      img {
      width: 27px;
      fill: #fff;
      cursor: pointer;
      padding: 0 9px;
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

@media (max-width: 595px) {
  .no-mobile {
    display: none;
  }

  .social {
    margin-top: 0;
  }

  .footer-links {
    padding-bottom: 30px;
  }
}
</style>
