<template>
  <div class="contact-main">
    <p class="head">
      Contact us
    </p>
    <p><img src="/assets/contactbanner.png" alt="facebook"></p>
    <div class="main-fields">
      <p class="button-under-text" style="font-size: 28px; text-align: center;">
        RETURNS? PLEASE REFER TO OUR <a style="font-weight: 800; text-decoration: underline;" href="/i/returns-policy">RETURNS POLICY PAGE</a>
      </p>
    </div>
    <p class="message" style="font-size: 28px;">
      <strong>SEND A MESSAGE OR CALL US ON 0800 012 6406</strong>
    </p>
    <div id="contact-us-form" class="form">
      <div class="main-fields">
        <div class="main-fields-1">
          <input id="fname" name="fname" type="text" placeholder="First Name" required> <input id="lname" name="lname" required="" type="text" placeholder="Last Name">
        </div>
        <div class="main-fields-2">
          <input id="email" name="email" type="text" placeholder="Email Address" required> <input id="phone" name="phone" required="" type="text" placeholder="Phone Number">
        </div>
        <textarea id="message" cols="50" name="message" required="" rows="4" placeholder="Message" />
      </div>
      <!-- <div class="main-fields">
&nbsp;
      </div> -->
    </div>
    <div class="buttonmessage">
      <button class="button-contact">
        Send Message
      </button>
    </div>
    <div class="return-text-form">
      <p class="anchor">
&nbsp;
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact-main {
    margin-top: -15px;
  .head {
    color: #6e2138;
    margin: 0;
    padding-top: 8px;
    // font-size: 47px;
    font-size: clamp(36px, 6.2vw, 72px);
    font-family: "Brandon_bld";
    position: absolute;
    left: 43%;
    @media (max-width: 500px) {
      left: 35%;
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

  p {
    img {
      width: 100%;
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

      input {
        border: 1px solid #828282;
        border-left: none;
        border-right: none;
        border-top: none;
        width: 100%;
        outline: none;
        user-select: unset;
        -webkit-user-select: unset;
        font-family: "Brandon_reg";
        font-weight: 700;
        font-size: 24px;
        @media screen and (max-width: 767px) {
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
      font-family: "Brandon_reg";
      font-weight: 700;
      @media screen and (max-width: 767px) {
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
