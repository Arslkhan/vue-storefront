<template>
  <button-full @click.native="addToCart(product)" :disabled="isProductDisabled" data-testid="addToCart">
    {{ $t('Add to cart') }}
  </button-full>
</template>

<script>
import { formatProductMessages } from '@vue-storefront/core/filters/product-messages'
import { notifications } from '@vue-storefront/core/modules/cart/helpers'
import focusClean from 'theme/components/theme/directives/focusClean'
import ButtonFull from 'theme/components/theme/ButtonFull.vue'
import { mapGetters } from 'vuex'
import { getProductPrimaryCategory } from '@vue-storefront/core/helpers'
import { MeasureProductClick } from 'src/modules/google-gtag/mixins/MeasureProductClick'

export default {
  directives: { focusClean },
  components: { ButtonFull },
  mixins: [MeasureProductClick],
  props: {
    product: {
      required: true,
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onAfterRemovedVariant () {
      this.$forceUpdate()
    },
    getProductOrCategoryPageMetaInfo (obj = this) {
      if (obj && (!obj.$options || !obj.$options.name || obj.$options.name !== 'DefaultLayout') && obj.$parent) {
        return this.getProductOrCategoryPageMetaInfo(obj.$parent);
      }
      if (obj?.$options?.name === 'DefaultLayout') {
        let component = obj.$children.find(c => ['ProductPage', 'CategoryPage', 'HomePage'].includes(c?.$options?.name))
        return { name: component?.$options?.name, meta: { ...component.$metaInfo } }
      }
    },
    async addToCart (product) {
      try {
        const diffLog = await this.$store.dispatch('cart/addItem', { productToAdd: product })
        diffLog.clientNotifications.forEach(notificationData => {
          this.notifyUser(notificationData)
        })

        let cartProduct = null
        if (product.type_id === 'simple') {
          cartProduct = this.currentCartItems?.find(c => c.sku === product.sku)
        }
        let page = this.getProductOrCategoryPageMetaInfo();
        let productCat = getProductPrimaryCategory(product);

        await this.sendAddCartProdClick({
          product: cartProduct || product,
          page,
          priceFromTotals: false,
          category: productCat
        })
      } catch (message) {
        this.notifyUser(notifications.createNotification({ type: 'error', message }))
      }
    },
    notifyUser (notificationData) {
      this.$store.dispatch('notification/spawnNotification', notificationData, { root: true })
    }
  },
  computed: {
    ...mapGetters({
      isAddingToCart: 'cart/getIsAdding',
      currentCartItems: 'cart/getCartItems'
    }),
    isProductDisabled () {
      return this.disabled || formatProductMessages(this.product.errors) !== '' || this.isAddingToCart
    }
  },
  beforeMount () {
    this.$bus.$on('product-after-removevariant', this.onAfterRemovedVariant)
  },
  beforeDestroy () {
    this.$bus.$off('product-after-removevariant')
  }
}
</script>
