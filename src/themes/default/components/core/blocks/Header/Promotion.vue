<template>
   <div>
    <div class="promotion-bar">
    <div class="sale-heading">
        <router-link :to="localizedRoute('/our-range.html')" class="sale-class">
            SALE <br> UP TO 50% OFF
        </router-link>
    </div>
    <img src="assets/promotionbar.png" alt="sale-promotion">
  </div>    
</div>
</template>

<script>
export default {
  name: 'Promotion'
};
</script>

<style>

</style>