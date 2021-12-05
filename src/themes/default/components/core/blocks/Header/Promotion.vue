<template>
   <div>
    <div class="promotion-bar">
    <div class="sale-heading">
        <router-link :to="localizedRoute('/our-range.html')" class="sale-class">
            <span class="first">SALE</span> <br>
            <span class="second"> UP TO 50% OFF</span> 
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

<style lang="css">
.sale-class {
    color: #ffffff;
}
</style>