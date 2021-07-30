<template>
        <div class="row">
            <div class="center-Content overlay-Left">
                <a class="website-Link" href="https://w10.world/">Visit W10 Drinkware Collection</a>
                <img class="w10Logo" src="/assets/w10Logo.svg">
            </div>
            <div class="center-Content overlay-Right">
                <a class="website-Link" href="#">Visit Costa Coffee Drinkware</a>
                <img class="costaCoffee" src="/assets/costaCoffee.svg">
                <img class="costaCoffee-cup" src="/assets/costaCoffee-cup.svg">
            </div>
        </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },

    mounted () {
        this.HomeScrollDisable()
    },

   methods: {
       HomeScrollDisable () {
           if(document.querySelector('.overlayHome'));
           {
               document.querySelector('body').style.overflow = "hidden";
           }
       }
  },
}
</script>
<style lang="scss" scoped>
    .center-Content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;

    }
    .overlay-Right{
        background: #6D1F37;
        width: 50%;
    }
    .overlay-Left{
        background: #000000;
        width: 50%;
    }
    .w10Logo{
        width: 280px;
          @media (max-width:767px){
            width: 150px;
          }
    }
    .costaCoffee{
        width:265px;
        padding-bottom: 45px;
         @media (max-width:767px){
            padding-bottom: 20px;
            width: 140px;
         }
    }
    .costaCoffee-cup{
        width: 65px;
          @media (max-width:767px){
              width: 40px;
          }
    }
    .website-Link{
        color:white;
        text-decoration: underline;
        font-size: 24px;
        text-align: center;
        font-family: 'Raleway-Regular';
        padding-bottom: 25px;
        @media (max-width:767px){
            font-size: 18px;
        }
    }
    .overlay-Right{
        .website-Link{
            padding-bottom: 45px;
            @media (max-width:767px){
                padding-bottom: 20px;
            }
        }
    }
    a.underline:after, a:not(.no-underline):hover:after{
        content: none;
    }
</style>
