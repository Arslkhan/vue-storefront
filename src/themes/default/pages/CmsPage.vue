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
    <template v-if="cmsPageContent.title === 'Contact Us'">
      <div class="container pb60 contact-us-info" v-html="cmsPageContent.content" />
    </template>
    <div v-else
         class="container pb60" v-html="cmsPageContent.content"
    />
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
  mixins: [CmsPage]
}
</script>
<style lang="scss">
#cms-page {
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
.return-main {
  padding: 0 0 83px 0;
  h3 {
    font-family: 'Brandon_reg';
  }
  p {
    font-family: 'Raleway-Regular';
  }
  span {
    color: #6E2138;
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
      /* margin: 0; */
      padding: 0;
      font-size: 47px;
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
      font-size: 20px;
      font-family: 'BrandonMedium';
      text-align: center;
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
        }
        input::placeholder {
          font-weight: bold;
        }
        #message {
          border: 1px solid #828282;
          border-left: none;
          border-right: none;
          border-top: none;
          width: 100%;
          margin-top: 25px;
          outline: none;
          user-select: none;
          resize: unset;
        }
        #message::placeholder {
          font-weight: bold;
        }
      }

    }
    .buttonmessage {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 43px;
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
      margin-top: 28px;
      padding-bottom: 30px;
      p {
        font-family: 'BrandonMedium';
        font-size: 17px;
        a {
          color: #6D1F37;
          font-family: 'BrandonMedium';
          font-size: 17px;
          padding-left: 3px;
          cursor: pointer;
        }
        a.underline:after, a:not(.no-underline):hover:after  {
          content: none;
        }
      }
    }
  }
</style>
