<template>
  <div class="header">
    <!--    <top-promo />-->
    <header
      class="fixed w-100 brdr-bottom-1 bg-cl-primary"
      :class="{ 'is-visible': navVisible }"
    >
      <div class="container1 px15 main-container-header">
        <div
          class="row between-xs middle-sm mainhead"
          v-if="!isCheckoutPage || isThankYouPage"
        >
          <div class="col-xs-2 visible-xs mobile-logo">
            <div>
              <hamburger-icon class="p15 icon pointer" />
            </div>
          </div>

          <div class="col-md-3 end-xs col-xs-5 logo">
            <logo :imgsrc="'/assets/logo2.png'" class="visible-xs" />
            <logo :imgsrc="'/assets/logo.png'" class="hidden-xs" />
          </div>
          <div class="col-md-7 hidden-xs center-xs headerlink">
            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/our-range.html')"
              exact
            >
              Our Range
            </router-link>

            <div class="spacer relative inline-flex" />

            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/innovation')"
              exact
            >
              Innovation
            </router-link>
            <div class="spacer relative inline-flex" />

            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/faq')"
              exact
            >
              FAQ
            </router-link>

            <div class="spacer relative inline-flex" />

            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/about-us')"
              exact
            >
              About us
            </router-link>

            <div class="spacer relative inline-flex" />
            <router-link
              class="inline-flex weight-500 relative no-underline"
              :to="localizedRoute('/contact-us')"
              exact
            >
              Contact Us
            </router-link>
            <div class="spacer relative inline-flex" />
            <a
              class="inline-flex weight-500 relative no-underline"
              href="https://costacoffee.w10.world/"
            >
              Costa Coffee Range
            </a>
          </div>
          <!-- <div class="logodiv col-md-1">
            <a
              class="inline-flex weight-500 relative no-underline costa-logo" href="http://costa.w10.world/"
            >
              <img src="/assets/Costa_Logo.svg" alt="costaLogo">
            </a>
          </div> -->
          <div class="col-xs-4 end-xs p0 m0 mt15 visible-xs mobile-cart">
            <wishlist-icon class="icon pointer" />
            <microcart-icon class="icon pointer" />
          </div>
          <div class="col-md-2 col-xs-4 end-xs icons-group">
            <div class="navicon">
              <div class="inline-flex right-icons">
                <search-icon class="p15 cl-white icon hidden pointer" />
                <wishlist-icon class="p10 cl-white icon pointer wishicon" />
                <microcart-icon class="p10 cl-white icon pointer carticon" />
                <account-icon class="p10 icon pointer" />
              </div>
            </div>
            <div class="social-icons">
              <a
                href="https://www.facebook.com/pg/W10Drinkware/posts"
                target="_blank"
              ><span
              ><svg
                    baseProfile="tiny"
                    height="24px"
                    id="Layer_1"
                    version="1.2"
                    viewBox="0 0 24 24"
                    width="24px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g>
                      <path
                        d="M13,10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189,0.374-2.691,1.118-3.512C11.862,4.41,12.791,4,13.904,4H16v3h-2.1   C13.402,7,13,7.402,13,7.899V10z"
                        fill="#fff"
                        id="fbicon"
                      />
                    </g></svg></span
              ></a>
              <a href="https://twitter.com/w10_drinkware" target="_blank"
              ><span
              ><svg
                    enable-background="new 0 0 56.693 56.693"
                    height="24px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 56.693 56.693"
                    width="24px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#fff"
                      d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"
                      id="twitter"
                    /></svg></span
              ></a>
              <a
                href="https://www.youtube.com/channel/UCkmCR0ClJsM6PXnAHfm_t9A"
                target="_blank"
              >
                <span
                ><svg
                    height="100%"
                    style="
                      fill-rule: evenodd;
                      clip-rule: evenodd;
                      stroke-linejoin: round;
                      stroke-miterlimit: 2;
                    "
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="100%"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      fill="#fff"
                      d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z"
                      style="fill-rule: nonzero"
                      id="youtube"
                    /></svg></span
                ></a>
              <a href="https://www.instagram.com/w10.world/" target="_blank">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      id="insta"
                    />
                  </svg> </span
                ></a>
            </div>
          </div>
        </div>
        <div
          class="row between-xs middle-xs px15 py5"
          v-if="isCheckoutPage && !isThankYouPage"
        >
          <div class="col-xs-5 col-md-3 middle-xs">
            <div>
              <router-link :to="localizedRoute('/')" class="cl-tertiary links">
                {{ $t("Return to shopping") }}
              </router-link>
            </div>
          </div>
          <div class="col-xs-2 col-md-6 center-xs">
            <logo width="auto" height="124px" />
          </div>
          <div class="col-xs-5 col-md-3 end-xs">
            <div>
              <a
                v-if="!currentUser"
                href="#"
                @click.prevent="gotoAccount"
                class="cl-tertiary links"
              >{{ $t("Login to your account") }}</a
              >
              <span v-else>{{
                  $t("You are logged in as {firstname}", currentUser)
                }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="header-placeholder" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CurrentPage from "theme/mixins/currentPage";
import AccountIcon from "theme/components/core/blocks/Header/AccountIcon";
import CompareIcon from "theme/components/core/blocks/Header/CompareIcon";
import HamburgerIcon from "theme/components/core/blocks/Header/HamburgerIcon";
import Logo from "theme/components/core/Logo";
import MicrocartIcon from "theme/components/core/blocks/Header/MicrocartIcon";
import SearchIcon from "theme/components/core/blocks/Header/SearchIcon";
import WishlistIcon from "theme/components/core/blocks/Header/WishlistIcon";
// import TopPromo from "theme/components/theme/blocks/Home/TopPromo";

export default {
  name: "Header",
  components: {
    AccountIcon,
    CompareIcon,
    HamburgerIcon,
    Logo,
    MicrocartIcon,
    SearchIcon,
    WishlistIcon,
    // TopPromo,
  },
  mixins: [CurrentPage],
  data() {
    return {
      navVisible: true,
      isScrolling: false,
      scrollTop: 0,
      lastScrollTop: 0,
      navbarHeight: 54,
    };
  },
  computed: {
    ...mapState({
      isOpenLogin: (state) => state.ui.signUp,
      currentUser: (state) => state.user.current,
    }),
    isThankYouPage() {
      return this.$store.state.checkout.isThankYouPage
        ? this.$store.state.checkout.isThankYouPage
        : false;
    },
  },
  beforeMount() {
    window.addEventListener(
      "scroll",
      () => {
        this.isScrolling = true;
      },
      { passive: true }
    );

    setInterval(() => {
      if (this.isScrolling) {
        this.hasScrolled();
        this.isScrolling = false;
      }
    }, 250);
  },
  methods: {
    gotoAccount() {
      this.$bus.$emit("modal-toggle", "modal-signup");
    },
    hasScrolled() {
      this.scrollTop = window.scrollY;
      if (
        this.scrollTop > this.lastScrollTop &&
        this.scrollTop > this.navbarHeight
      ) {
        this.navVisible = false;
      } else {
        this.navVisible = true;
      }
      this.lastScrollTop = this.scrollTop;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~theme/css/variables/colors";
@import "~theme/css/helpers/functions/color";

$color-icon-hover: color(primary, $colors-background);
.w10 {
  font-size: 26px;
  line-height: 21px;
  margin-right: 4px;
}

header {
  height: 150px;
  top: -201px;
  z-index: 3;
  transition: top 0.2s ease-in-out;

  &.is-visible {
    top: 0;
  }
}
.logodiv {
  @media (max-width: 865px) {
    flex-basis: 3%;
    max-width: 3%;
  }
  @media (max-width: 768px) {
    display: none;
  }
  .costa-logo {
    margin-top: 25px;
    // @media (max-width: 865px) {
    //   margin-left: -14px;
    // }
    img {
      @media (max-width: 1092px) {
        width: 75px;
      }
      @media (max-width: 990px) {
        width: 60px;
      }
      @media (max-width: 865px) {
        width: 54px;
        margin-left: -28px;
      }
    }
  }
}
@media (max-width: 768px) {
  .mobile-logo {
    display: flex;
    align-items: center;
  }
  .logo {
    margin: 0 !important;
    display: flex;
    align-items: center;
  }
  .mobile-cart {
    margin: 0;
    display: flex;
    align-items: center;
  }
}
.icons-group {
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1265px) {
    flex-basis: 20%;
    max-width: 20%;
    padding: 0;
  }
  @media (max-width: 816px) {
    flex-basis: 18%;
    max-width: 18%;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  margin-top: -26px;
  .navicon {
    margin: 0;
  }
  .wishicon {
    display: flex;
    order: 2;
    @media (max-width: 480px) {
      padding: 0 10px 0 0;
    }
  }
  .carticon {
    display: flex;
    order: 3;
    @media (max-width: 480px) {
      padding: 0 10px 0 0;
    }
  }
}
.social-icons {
  display: flex;
  justify-content: flex-end;
  padding: 4px 7px 0 0;
  a {
    // height: 0px;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (max-width: 1199px) and (min-width: 768px) {
    padding: 0;
  }
  span {
    padding: 0 9px;
    cursor: pointer;
    @media (min-width: 768px) and (max-width: 780px) {
      padding: 0 4px;
    }
    svg {
      width: 26px;
      fill: #fff;
      cursor: pointer;
      @media (max-width: 1199px) and (min-width: 768px) {
        width: 22px;
      }
    }
  }
}
@media (max-width: 1027px) {
  .container-main-header {
    padding-right: 7px;
  }
}
.logo {
  margin-top: 22px;
  @media (min-width: 768px) and (max-width: 1491px) {
    flex-basis: 13%;
    max-width: 13%;
  }
  // @media (min-width:768px) and (max-width:1265px) {
  //   flex-basis: 17%;
  //   max-width: 17%;
  // }
  // @media (min-width:768px) and (max-width:1092px) {
  //   flex-basis: 16%;
  //   max-width: 16%;
  // }
  // @media (min-width:768px) and (max-width:865px) {
  //   flex-basis: 20%;
  //   max-width: 20%;
  //   // flex-basis: 18%;
  //   // max-width: 18%;
  // }
  @media (min-width: 768px) and (max-width: 816px) {
    flex-basis: 14%;
    max-width: 14%;
    // flex-basis: 18%;
    // max-width: 18%;
  }
}
@media (max-width: 1092px) {
  .mainhead {
    margin-top: 15px;
  }
}
.headerlink {
  margin-top: 23px;
  @media (min-width: 768px) and (max-width: 1491px) {
    flex-basis: 67%;
    max-width: 67%;
  }
  @media (min-width: 768px) and (max-width: 1266px) {
    justify-content: flex-end;
  }
  @media (min-width: 768px) and (max-width: 816px) {
    justify-content: unset;
    padding-left: 42px;
  }
  // @media (max-width: 1265px) {
  //   flex-basis: 51%;
  //   max-width: 51%;
  // }
  // @media (max-width:1027px) {
  //   flex-basis: 54%;
  //   max-width: 54%;
  // }
  @media (max-width: 940px) {
    padding-right: 0;
    // justify-content: center;
  }
  // @media (max-width:1090px) {
  //   flex-basis: 61%;
  //   max-width: 61%;
  // }
}

.navicon {
  margin-top: -54px;
  // @media (max-width:865px) {
  //   flex-basis: 14.666667%;
  //   max-width: 14.666667%;
  // }
}

.icon {
  opacity: 1;

  &:hover,
  &:focus {
    background-color: $color-icon-hover;
    opacity: 1;
  }
}

.right-icons {
  //for edge
  float: right;
}

.header-placeholder {
  height: 151px;
}

.links {
  text-decoration: underline;
}

.spacer {
  border-right: 1px solid #aa806e;
  margin: 0 20px;
  @media (min-width: 768px) and (max-width: 1082px) {
    margin: 0 10px;
  }
}
@media (max-width: 940px) {
  // .spacer {
  //   margin: 0 10px;
  // }
  @media (max-width: 952px) {
    .spacer {
      margin: 0 6px;
      @media (min-width: 768px) and (max-width: 852px) {
        margin: 0 3px;
      }
    }
  }
  // .headerlink a {
  //   font-size: 14px;
  // }
}
@media (max-width: 896px) {
  .headerlink a {
    font-size: 12.4px;
    @media (min-width: 768px) and (max-width: 816px) {
      font-size: 12px;
    }
  }
}
// @media (max-width: 769px) {
//   .logo {
//     margin-top: 5px;
//   }

//   header {
//     height: 60px;
//     top: 24px !important;
//   }
//   .header-placeholder {
//     height: 85px;
//   }
//   .row.middle-xs {
//     margin: 0 -15px;

//     &.py5 {
//       margin: 0;
//     }
//   }
//   .col-xs-2:first-of-type {
//     padding-left: 0;
//   }
//   .col-xs-2:last-of-type {
//     padding-right: 0;
//   }
//   a,
//   span {
//     font-size: 12px;
//   }
// }
</style>
<style>
header .material-icons {
  font-size: 30px !important;
  color: #fff;
}

.headerlink a {
  text-transform: uppercase;
  color: #fff;
  /* font-size: 18px; */
  font-size: clamp(13px, 1.205vw, 18px);
  border-bottom: 1px solid #000;
  border-top: 0px solid #000;
}
/* @media (max-width:1385px) {
  .headerlink a {
    font-size: 15px;
    }
  }
  @media (max-width: 999px) {
    .headerlink a {
      font-size: 13px;
    }
  } */
.headerlink a:hover {
  border-bottom: 1px solid #aa806e;
  border-top: 0px solid #aa806e;
}

/* @media (max-width: 1051px) {
  .headerlink a {
    font-size: 16px
  }
} */

/* @media (max-width: 892px) {
  .headerlink a {
    font-size: 14px
  }
} */
</style>
