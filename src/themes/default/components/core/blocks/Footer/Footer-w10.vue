<template>
  <footer>
    <div class="footerholder">
      <div class="container">
        <div class="row m0 center-xs between-md">
          <div class="col-xs-12 mb20 logo-footer">
            <img v-lazy="'/assets/logo2.png'" height="124px" alt="W10" />
          </div>
          <div class="col-xs-12">
            <img
              v-lazy="'/assets/cred.png'"
              height="44px"
              alt="BPMA Accedited"
            />
            <img
              v-lazy="
                '/assets/british-jewellery-and-giftware-international.png'
              "
              height="82px"
              alt="british jewellery and giftware international"
            />
          </div>
          <!-- <div class="col-xs-12"><p><a href="tel:0800 012 6406"><b>0800 012 6406</b></a><br/>
            <a href="mailto:contactus@w10.world" class="text-underline">contactus@w10.world</a></p></div> -->
          <div class="footer-parent col-md-12">
            <div class="footer-menu">
              <!-- <a
                href="tel:0800 012 6406"
              >
                {{ $t('0800 012 6406') }}&copy;
              </a> -->
              <!-- <span>|</span>
              <a
                href="mailto:contactus@w10.world"
              >
                {{ $t('CONTACTUS@W10.WORLD') }}
              </a> -->
              <!-- <span>|</span> -->
              <span class="w10-limited">
                &copy;2021 The w10 collection limited
              </span>
              <router-link to="/i/terms-and-conditions" exact>
                {{ $t("TERMS & CONDITIONS ") }}
              </router-link>
              <!-- <span>|</span> -->
              <router-link to="/i/privacy-policy" exact>
                {{ $t("PRIVACY POLICY") }}
              </router-link>
              <!-- <span>|</span> -->
              <router-link class="return" to="/i/returns" exact>
                Returns
              </router-link>
              <!-- <span>|</span> -->
              <router-link class="return" to="/contact-us" exact>
                Contact Us
              </router-link>
              <!-- <span>|</span> -->
              <a class="return" href="https://costacoffee.w10.world/">
                Costa Coffee Range
              </a>
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
                    xmlns:serif="http://www.serif.com/"
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
          <div class="col-xs-12 TIDEWAY">
            <p>
              TIDEWAY YARD UNIT T04, 125 MORTLAKE HIGH STREET, LONDON, SW14 8SN
            </p>
          </div>

          <!-- <div class="col-xs-12">
            <p>© 2021 Jogroup trading as W10 </p>
          </div> -->
          <!--          <div class="col-xs-12">  <p><a href="https://www.origin.uk.com" rel="noopener" class="small" target="_blank">WEB DESIGN BY ORIGIN</a></p></div>-->
          <div class="col-xs-12 cards">
            <img
              class="stripe-icon mr-2"
              src="https://secure.w10.world/pub/static/version1598452708/frontend/origin/w10/en_GB/StripeIntegration_Payments/img/cards/amex.svg"
              width="50"
              alt="amex"
            />

            <img
              class="stripe-icon mr-2"
              src="https://secure.w10.world/pub/static/version1598452708/frontend/origin/w10/en_GB/StripeIntegration_Payments/img/cards/discover.svg"
              width="50"
              alt="discover"
            />

            <img
              class="stripe-icon mr-2"
              src="https://secure.w10.world/pub/static/version1598452708/frontend/origin/w10/en_GB/StripeIntegration_Payments/img/cards/diners.svg"
              width="50"
              alt="diners"
            />

            <img
              class="stripe-icon mr-2"
              src="https://secure.w10.world/pub/static/version1598452708/frontend/origin/w10/en_GB/StripeIntegration_Payments/img/cards/jcb.svg"
              width="50"
              alt="jcb"
            />

            <img
              class="stripe-icon mr-2"
              src="https://secure.w10.world/pub/static/version1598452708/frontend/origin/w10/en_GB/StripeIntegration_Payments/img/cards/mastercard.svg"
              width="50"
              alt="mastercard"
            />

            <img
              class="stripe-icon mr-2"
              src="https://secure.w10.world/pub/static/version1598452708/frontend/origin/w10/en_GB/StripeIntegration_Payments/img/cards/visa.svg"
              width="50"
              alt="visa"
            />

            <img
              class="stripe-icon"
              src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-medium.png"
              width="50"
              alt="paypal"
            />
          </div>
        </div>
      </div>
    </div>

    <back-to-top bottom="20px" right="20px" visibleoffset="200">
      <button
        type="button"
        class="
          btn-top
          button
          no-outline
          brdr-none
          cl-white
          bg-cl-mine-shaft
          :bg-cl-th-secondary
          py10
          px10
        "
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"
            fill="white"
          />
        </svg>
      </button>
    </back-to-top>
  </footer>
</template>

<script>
import BackToTop from "theme/components/core/BackToTop";

export default {
  name: "MainFooter",
  components: {
    BackToTop,
  },
};
</script>

<style lang="scss" scoped>
.footerholder {
  .container {
    @media (min-width: 767px) {
      width: 1500px;
    }
  }
  padding: 15px 0 15px 0;
}
@media (min-width: 768px) {
  .logo-footer {
    margin-bottom: 10px;
  }
  .TIDEWAY {
    p {
      margin: 10px 0;
    }
  }
}
footer {
  background: #000;
}
a:hover {
  color: #98694b;
  text-decoration: none !important;
  background-color: black !important;
}
p,
a {
  color: #98694b;
  font-size: 18px;
  text-transform: uppercase;
}
.small {
  font-size: 16px;
}
.text-underline {
  text-decoration: underline;
}
.footer-parent {
  justify-content: flex-end;
  display: flex;
  padding-right: 0;
  padding-top: 20px;
  @media (max-width: 1135px) {
    flex-direction: column;
  }
  .social-icons {
    display: flex;
    justify-content: flex-end;
    padding: 0;
    padding-left: 24px;
    @media (max-width: 1135px) {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 15px !important;
    }
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
}
.footer-menu {
  display: flex;
  @media (max-width: 1135px) {
    display: flex;
    justify-content: center;
  }
  span,
  a {
    color: #98694b;
    padding-right: 11px;
  }
  .w10-limited {
    color: #98694b;
    font-size: 18px;
    text-transform: uppercase;
    @media (min-width: 768px) and (max-width: 1339px) {
      font-size: clamp(12px, 1.344vw, 15px);
    }
    @media (min-width: 768px) and (max-width: 808px) {
      padding-right: 6px;
    }
  }
  @media (min-width: 768px) and (max-width: 1339px) {
    a {
      font-size: clamp(12px, 1.344vw, 15px);
      @media (min-width: 768px) and (max-width: 808px) {
        padding-right: 6px;
      }
    }
  }
}
@media (max-width: 1199px) {
  .footer-menu {
    line-height: 1.7;
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }
}
.cards {
  img {
    width: 30px;
  }
}
</style>
