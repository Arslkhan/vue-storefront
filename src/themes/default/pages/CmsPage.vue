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
    <div class="container pb60" v-if="!isContactUsPage" v-html="cmsPageContent.content" />
    <div class="container-fluid pb60" v-if="isContactUsPage" v-html="cmsPageContent.content" />
  </div>
</template>

<script>
import CmsPage from '@vue-storefront/core/pages/CmsPage'

export default {
  computed: {
    cmsPageContent () {
      return this.$store.state.cmsPage.current
    }
  },
  methods: {
    isContactUsPage () {
      if (this.cmsPageContent.title) {
        let contactName = this.cmsPageContent.title;
        return contactName.toLowerCase().includes('contact us')
      }
      return ''
    }
  },
  mixins: [CmsPage]
}
</script>
<style lang="scss">
#cms-page {
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
    font-family: 'Brandon_reg';
  }
  p {
    font-family: 'BrandonMedium';
    font-size: 20px;
    line-height: 28px;
  }
  .returns-head {
    color: #6E2138;
    font-family: 'Brandon_bld';
    font-size: 32px;
    margin-bottom: 0;
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
  a.underline:after, a:not(.no-underline):hover:after {
    content: none;
  }
  a{
    color: #6E2138;
    cursor: pointer;
    text-decoration: underline;
    }
  .unused {
    a{
      color: #6E2138;
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
    font-family: 'Raleway-Regular';
    padding-bottom: 83px;
    line-height: 1.8;
  }
  p {
    font-weight: bold;
    font-family: 'Raleway-Regular';
  }
}
.terms-and-condition {
  p, h2, ul, li, span {
        font-family: 'Raleway-Regular';
  }
  p {
    line-height: 1.8;
  }
}
  .contact-main {
    .head {
      color: #6E2138;
      margin: 0;
      padding-top: 8px;
      // font-size: 47px;
      font-size: clamp(36px, 6.2vw, 72px);
      font-family: 'BrandonMedium';
      position: absolute;
      left: 43%;
      @media (max-width: 500px) {
        left: 35%;
      }
    }
    p {
      img {
        width: 100%;
      }
    }
    .message {
      color: #6D1F37;
      font-size: 24px;
      font-family: 'BrandonMedium';
      text-align: center;
      font-weight: 700;
      padding-bottom: 10px;
    }
    .form {
      .main-fields {
        padding: 0px 170px;
        @media(max-width: 1199px) {
          padding: 0px 80px;
        }
        @media(max-width: 767px) {
         padding: 0px 30px;
        }
        .main-fields-1 {
          display: flex;
        @media(max-width: 767px) {
         flex-direction: column;
        }
          #fname {
            margin-right: 8px;
            @media(max-width: 767px) {
              margin: 0;
            }
          }
        #lname {
            margin-left: 8px;
            @media(max-width: 767px) {
               margin: 0;
            }
          }
        }
        .main-fields-2 {
          display: flex;
          margin-top: 9px;
          @media(max-width: 767px) {
            flex-direction: column;
            margin-top: 0;
          }
          #email {
            margin-right: 8px;
            @media(max-width: 767px) {
              margin: 0;
            }
          }
         #phone {
            margin-left: 8px;
            @media(max-width: 767px) {
              margin: 0;
            }
          }
        }
        input {
          border: 1px solid #828282;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          outline: none;
          user-select: none;
          font-family: 'Brandon_reg';
          font-weight: 700;
          font-size: 24px;
          @media screen and (max-width:767px) {
            font-size: 18px;
          }
        }
        input::placeholder {
          font-weight: bold;
        }
      }
      #message {
        border: 1px solid #828282;
        border-left: none;
        border-right: none;
        border-top: none;
        width: 100%;
        margin-top: 15px;
        outline: none;
        user-select: none;
        resize: unset;
        font-size: 24px;
        font-family: 'Brandon_reg';
        font-weight: 700;
        @media screen and (max-width:767px) {
            font-size: 18px;
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
       @media screen and (max-width:1024px) {
        margin-top: 60px;
      }
      @media screen and (max-width:767px) {
        margin-top: 40px;
      }

      button {
        background: #6D1F37;
        height: 61px;
        width: 100%;
        max-width: 251px;
        border-radius: 50px;
        border: none;
        color: #fff;
        font-family: 'BrandonMedium';
        font-size: 17px;
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
        font-family: 'BrandonMedium';
        font-size: 24px;
        @media screen and (max-width:767px) {
            font-size: 18px;
        }
        a {
          color: #6D1F37;
          font-family: 'BrandonMedium';
          font-size: 24px;
          padding-left: 3px;
          cursor: pointer;
          @media screen and (max-width:767px) {
            font-size: 18px;
         }
        }
        a.underline:after, a:not(.no-underline):hover:after  {
          content: none;
        }
      }
    }
  }
  .main-terms {
      padding-bottom: 27px;
    .termh2 {
      color: #6D1F37;
      font-family: 'BrandonMedium';
    }
    ol li::marker {
      color: #fff;
    }
    ol {
      padding: 0;
    }
    p {
      font-family: 'BrandonMedium';
    }
    .terms-top {
      margin-top: 50px;
    }
    strong {
      font-weight: 400;
    }
    span {
      line-height: 25px;
    }

  }
</style>
