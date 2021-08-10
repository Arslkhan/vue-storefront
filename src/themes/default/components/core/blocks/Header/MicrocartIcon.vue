<template>
  <button
    type="button"
    class="relative bg-cl-transparent brdr-none inline-flex inner-button"
    @click="openMicrocart"
    data-testid="openMicrocart"
    :aria-label="$t('Open microcart')"
  >
    <!-- <i class="material-icons">shopping_cart</i> -->
    <img src="/assets/fonts/bag.svg" alt="basket">
    <span
      class="minicart-count absolute flex center-xs middle-xs border-box py0 px2 h6 lh16 weight-700 cl-white bg-cl-silver"
      v-cloak
      v-show="totalQuantity"
      data-testid="minicartCount"
    >
      {{ totalQuantity }}
    </span>
  </button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MicrocartIcon from '@vue-storefront/core/compatibility/components/blocks/Header/MicrocartIcon'
import { syncCartWhenLocalStorageChange } from '@vue-storefront/core/modules/cart/helpers'

export default {
  mounted () {
    syncCartWhenLocalStorageChange.addEventListener()
    this.$once('hook:beforeDestroy', () => {
      syncCartWhenLocalStorageChange.removeEventListener()
    })
  },
  computed: {
    ...mapGetters({
      totalQuantity: 'cart/getItemsTotalQuantity'
    })
  },
  methods: {
    ...mapActions({
      openMicrocart: 'ui/toggleMicrocart'
    })
  }
}
</script>

<style scoped lang='scss'>
  .minicart-count {
    top: 7px;
    left: 50%;
    min-width: 16px;
    min-height: 16px;
    border-radius: 10px;
  }
  @media (max-width: 1199px) and (min-width: 768px) {
     button {
       padding: 0;
     }
    .inner-button {
      padding: 18px 7px;
      img {
        width: 25px;
        padding-top: 2px;
      }
    }
  }
</style>
