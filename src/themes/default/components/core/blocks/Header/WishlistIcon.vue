<template>
  <button
    type="button"
    class="inline-flex bg-cl-transparent brdr-none relative"
    @click="toggleWishlistPanel"
    data-testid="wishlist-icon"
    :aria-label="$t('Open wishlist')"
  >
    <!-- <i class="material-icons">favorite_border</i> -->
    <img src="/assets/fonts/heart.svg" alt="wishlist" height="35" width="35px">
    <span
      class="whishlist-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white bg-cl-silver"
      v-cloak
      v-show="getWishlistItemsCount"
    >
      {{ getWishlistItemsCount }}
    </span>
  </button>
</template>

<script>
import WishlistIcon from '@vue-storefront/core/compatibility/components/blocks/Header/WishlistIcon'

export default {
  mixins: [WishlistIcon]
}
</script>

<style scoped lang="scss">
  .whishlist-count {
    top: 7px;
    left: 50%;
    min-width: 16px;
    min-height: 16px;
    border-radius: 10px;
  }
  @media (max-width: 1199px) and (min-width: 768px) {
  button {
    padding: 18px 7px;
    img {
      width: 27px;
    }
  }
}
</style>
