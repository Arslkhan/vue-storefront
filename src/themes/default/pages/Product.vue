<template>
  <div id="product">
    <section class="bg-cl-secondary px20 product-top-section">
      <div class="container">
        <section class="row m0 between-xs">
          <div class="col-xs-12 col-md-6 center-xs middle-xs image">
            <breadcrumbs
              class="product-Breadcrumb hidden-xs"
            />
            <no-ssr>
              <product-gallery
                :offline="getOfflineImage"
                :gallery="getProductGallery"
                :configuration="getCurrentProductConfiguration"
                :product="getCurrentProduct"
              />
            </no-ssr>
          </div>
          <div class="col-xs-12 col-md-5 data">
            <h1
              class="mb0 mt0 cl-mine-shaft product-name"
              data-testid="productName"
            >
              {{ getCurrentProduct.name | htmlDecode }}
              <!-- <web-share
                :title="getCurrentProduct.name | htmlDecode"
                text="Check this product!"
                class="web-share"
              /> -->
            </h1>
            <!-- <div
              class="mb20 uppercase cl-secondary"
              :content="getCurrentProduct.sku"
            >
              {{ $t('SKU: {sku}', { sku: getCurrentProduct.sku }) }}
            </div> -->
            <div class="Pd-Short-Description" v-html="getCurrentProduct.short_description"> {{ getCurrentProduct.short_description }}</div>
            <div>
              <product-price
                v-if="getCurrentProduct.type_id !== 'grouped'"
                :product="getCurrentProduct"
                :custom-options="getCurrentCustomOptions"
              />
              <div class="cl-primary variants hidden" v-if="getCurrentProduct.type_id =='configurable'">
                <div
                  class="error"
                  v-if="getCurrentProduct.errors && Object.keys(getCurrentProduct.errors).length > 0"
                >
                  {{ getCurrentProduct.errors | formatProductMessages }}
                </div>
                <div class="h5" v-for="option in getProductOptions" :key="option.id">
                  <div class="variants-label" data-testid="variantsLabel">
                    {{ option.label }}
                    <span
                      class="weight-700"
                    >{{ getOptionLabel(option) }}</span>
                  </div>
                  <div class="row top-xs m0 pt15 pb40 variants-wrapper">
                    <div v-if="option.label === 'Color'">
                      <color-selector
                        v-for="filter in getAvailableFilters[option.attribute_code]"
                        :key="filter.id"
                        :variant="filter"
                        :selected-filters="getSelectedFilters"
                        @change="changeFilter"
                      />
                    </div>
                    <div class="sizes" v-else-if="option.label === 'Size'">
                      <size-selector
                        class="mr10 mb10"
                        v-for="filter in getAvailableFilters[option.attribute_code]"
                        :key="filter.id"
                        :variant="filter"
                        :selected-filters="getSelectedFilters"
                        @change="changeFilter"
                      />
                    </div>
                    <div :class="option.attribute_code" v-else>
                      <generic-selector
                        class="mr10 mb10"
                        v-for="filter in getAvailableFilters[option.attribute_code]"
                        :key="filter.id"
                        :variant="filter"
                        :selected-filters="getSelectedFilters"
                        @change="changeFilter"
                      />
                    </div>
                    <span
                      v-if="option.label === 'Size'"
                      @click="openSizeGuide"
                      class="p0 ml30 inline-flex middle-xs no-underline h5 action size-guide pointer cl-secondary"
                    >
                      <i class="pr5 material-icons">accessibility</i>
                      <span>{{ $t('Size guide') }}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <product-links
              v-if="getCurrentProduct.type_id =='grouped'"
              :products="getCurrentProduct.product_links"
            />
            <product-bundle-options
              v-if="getCurrentProduct.bundle_options && getCurrentProduct.bundle_options.length > 0"
              :product="getCurrentProduct"
            />
            <product-custom-options
              v-else-if="getCurrentProduct.custom_options && getCurrentProduct.custom_options.length > 0"
              :product="getCurrentProduct"
            />
            <product-quantity
              class="row m0 mb35"
              v-if="getCurrentProduct.type_id !== 'grouped' && getCurrentProduct.type_id !== 'bundle'"
              v-model="getCurrentProduct.qty"
              :max-quantity="maxQuantity"
              :loading="isStockInfoLoading"
              :is-simple-or-configurable="isSimpleOrConfigurable"
              :show-quantity="manageQuantity"
              :check-max-quantity="manageQuantity"
              @error="handleQuantityError"
            />
            <div class="row m0">
              <add-to-cart
                :product="getCurrentProduct"
                :disabled="isAddToCartDisabled"
                class="col-xs-12 col-sm-4 col-md-6 addTo-Cart"
              />
              <AddToWishlist class="wishlist" :product="getCurrentProduct" />
            </div>

          <div class="productDescription">
            <h1 class="ProductDescription-Title">
              {{ $t('Description') }}
            </h1>
            <div class="h4 details-wrapper" :class="{'details-wrapper--open': detailsOpen}">
              <div class="row between-md m0">
                  <div class="lh30 h5 descriptionText" v-html="getCurrentProduct.description" />
<!--                  <ul class="descriptionText attributes p0 pt5 m0">-->
<!--                    <product-attribute-->
<!--                      :key="attr.attribute_code"-->
<!--                      v-for="attr in getCustomAttributes"-->
<!--                      :product="getCurrentProduct"-->
<!--                      :attribute="attr"-->
<!--                      empty-placeholder="N/A"-->
<!--                    />-->
<!--                  </ul>-->
                <!-- <div class="details-overlay" @click="showDetails" /> -->
              </div>
            </div>
            <h1 class="ProductDescription-Title" v-if="getCurrentProduct.costa_instruction">Care and use</h1>
              <p v-html="getCurrentProduct.costa_instruction" class="descriptionText">{{ getCurrentProduct.costa_instruction }}</p>
              <h1 class="ProductDescription-Title" v-if="getCurrentProduct.warning_notes">Warning notes</h1>
              <p v-html="getCurrentProduct.warning_notes" class="descriptionText">{{ getCurrentProduct.warning_notes }}</p>
          </div>

            <!-- <div class="productDescription">
              <h1 class="ProductDescription-Title">Description</h1>
              <ul>
                <li> Stainless Steel body, polypropylene plastic lid and silicone gasket ring </li>
                <li> Dishwasher - Body is dishwasher safe, lid to be hand washed </li>
                <li> Laser embellishment logo on body </li>
                <li> Dimensions - H 14cm, base diameter 6.7cm, lid diameter 8cm </li>
                <li> Capacity - 16oz/350ml </li>
                <li> Weight - 210g </li>
                <li> Do not use in a microwave </li>
                <li> Costa express machine compatible </li>
                <li>Spill proof lid </li>
              </ul>
              <h1 class="ProductDescription-Title">Care and use</h1>
              <p>Costa DISHWASHER HOT TRAVEL CUP Instructions</p>
            </div>  -->
          </div>
        </section>
      </div>
      <br> <br>
    </section>

    <!-- <lazy-hydrate when-idle>
      <reviews
        :product-name="getCurrentProduct.name"
        :product-id="getCurrentProduct.id"
        v-show="isOnline"
        :product="getCurrentProduct"
      />
    </lazy-hydrate> -->
    <!-- <lazy-hydrate when-idle>
      <related-products type="upsell" :heading="$t('We found other products you might like')" />
    </lazy-hydrate> -->
    <!-- <lazy-hydrate when-idle>
      <promoted-offers single-banner />
    </lazy-hydrate> -->
    <!-- <lazy-hydrate when-idle>
      <related-products type="related" />
    </lazy-hydrate> -->
    <!-- <SizeGuide /> -->
    <script v-html="getJsonLd" type="application/ld+json" />
  </div>
</template>

<script>
import config from 'config'
import AddToCart from 'theme/components/core/AddToCart.vue'
import GenericSelector from 'theme/components/core/GenericSelector'
import ColorSelector from 'theme/components/core/ColorSelector.vue'
import SizeSelector from 'theme/components/core/SizeSelector.vue'
import Breadcrumbs from 'theme/components/core/Breadcrumbs.vue'
import ProductQuantity from 'theme/components/core/ProductQuantity.vue'
import ProductLinks from 'theme/components/core/ProductLinks.vue'
import ProductCustomOptions from 'theme/components/core/ProductCustomOptions.vue'
import ProductBundleOptions from 'theme/components/core/ProductBundleOptions.vue'
import ProductGallery from 'theme/components/core/ProductGallery'
import focusClean from 'theme/components/theme/directives/focusClean'
import { mapGetters } from 'vuex'
import { ProductOption } from '@vue-storefront/core/modules/catalog/components/ProductOption.ts'
import { getAvailableFiltersByProduct, getSelectedFiltersByProduct } from '@vue-storefront/core/modules/catalog/helpers/filters'
import { isOptionAvailableAsync } from '@vue-storefront/core/modules/catalog/helpers/index'
import { localizedRoute, currentStoreView } from '@vue-storefront/core/lib/multistore'
import { htmlDecode } from '@vue-storefront/core/filters'
import { ReviewModule } from '@vue-storefront/core/modules/review'
import { RecentlyViewedModule } from '@vue-storefront/core/modules/recently-viewed'
import { registerModule, isModuleRegistered } from '@vue-storefront/core/lib/modules'
import { onlineHelper, isServer, productJsonLd } from '@vue-storefront/core/helpers'
import { catalogHooksExecutors } from '@vue-storefront/core/modules/catalog-next/hooks'
import ProductPrice from 'theme/components/core/ProductPrice.vue'
import { doPlatformPricesSync } from '@vue-storefront/core/modules/catalog/helpers'
import { filterChangedProduct } from '@vue-storefront/core/modules/catalog/events'
import NoSSR from 'vue-no-ssr'
import AddToWishlist from 'theme/components/core/blocks/Wishlist/AddToWishlist'

export default {
  components: {
    AddToCart,
    Breadcrumbs,
    ColorSelector,
    GenericSelector,
    ProductBundleOptions,
    ProductCustomOptions,
    ProductGallery,
    ProductLinks,
    SizeSelector,
    ProductQuantity,
    ProductPrice,
    'no-ssr': NoSSR,
    AddToWishlist
  },
  mixins: [ProductOption],
  directives: { focusClean },
  beforeCreate () {
    registerModule(ReviewModule)
    registerModule(RecentlyViewedModule)
  },
  data () {
    return {
      detailsOpen: false,
      maxQuantity: 0,
      quantityError: false,
      isStockInfoLoading: false,
      hasAttributesLoaded: false,
      manageQuantity: true
    }
  },
  computed: {
    ...mapGetters({
      getCurrentCategory: 'category-next/getCurrentCategory',
      getCurrentProduct: 'product/getCurrentProduct',
      getProductGallery: 'product/getProductGallery',
      getCurrentProductConfiguration: 'product/getCurrentProductConfiguration',
      attributesByCode: 'attribute/attributeListByCode',
      getCurrentCustomOptions: 'product/getCurrentCustomOptions'
    }),
    getOptionLabel () {
      return (option) => {
        const configName = option.attribute_code ? option.attribute_code : option.label.toLowerCase()
        return this.getCurrentProductConfiguration[configName] ? this.getCurrentProductConfiguration[configName].label : configName
      }
    },
    isOnline (value) {
      return onlineHelper.isOnline
    },
    getProductOptions () {
      if (
        this.getCurrentProduct.errors &&
        Object.keys(this.getCurrentProduct.errors).length &&
        Object.keys(this.getCurrentProductConfiguration).length
      ) {
        return []
      }
      return this.getCurrentProduct.configurable_options
    },
    getOfflineImage () {
      return {
        src: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height),
        error: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height),
        loading: this.getThumbnail(this.getCurrentProduct.image, config.products.thumbnails.width, config.products.thumbnails.height)
      }
    },
    getCustomAttributes () {
      return Object.values(this.attributesByCode || [])
        .filter(
          a => a.is_visible && a.is_user_defined && (parseInt(a.is_visible_on_front) || a.is_visible_on_front === true) && this.getCurrentProduct[a.attribute_code]
        )
        .sort((a, b) => { return a.attribute_id > b.attribute_id })
    },
    getAvailableFilters () {
      return getAvailableFiltersByProduct(this.getCurrentProduct)
    },
    getSelectedFilters () {
      return getSelectedFiltersByProduct(this.getCurrentProduct, this.getCurrentProductConfiguration)
    },
    isSimpleOrConfigurable () {
      return ['simple', 'configurable'].includes(this.getCurrentProduct.type_id)
    },
    isAddToCartDisabled () {
      if (this.quantityError || this.isStockInfoLoading) {
        return false
      }

      return this.isOnline && !this.maxQuantity && this.manageQuantity && this.isSimpleOrConfigurable
    },
    storeView () {
      return currentStoreView()
    },
    getJsonLd () {
      return productJsonLd(this.getCurrentProduct, this.getCurrentProductConfiguration.color && this.getCurrentProductConfiguration.color.label, this.$store.state.storeView.i18n.currencyCode, this.getCustomAttributes)
    }
  },
  async mounted () {
    console.log('getCurrentProduct', this.getCurrentProduct)
    await this.$store.dispatch('recently-viewed/addItem', this.getCurrentProduct)
  },
  async asyncData ({ store, route, context }) {
    if (context) context.output.cacheTags.add('product')
    const product = await store.dispatch('product/loadProduct', { parentSku: route.params.parentSku, childSku: route && route.params && route.params.childSku ? route.params.childSku : null })
    const loadBreadcrumbsPromise = store.dispatch('product/loadProductBreadcrumbs', { product })
    if (isServer) await loadBreadcrumbsPromise
    catalogHooksExecutors.productPageVisited(product)
  },
  beforeRouteEnter (to, from, next) {
    if (isServer) {
      next()
    } else {
      next((vm) => {
        vm.getQuantity()
      })
    }
  },
  watch: {
    isOnline: {
      handler (isOnline) {
        if (isOnline) {
          this.getQuantity()
        }
      }
    }
  },
  methods: {
    showDetails (event) {
      this.detailsOpen = true
      event.target.classList.add('hidden')
    },
    notifyOutStock () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'error',
        message: this.$t(
          'The product is out of stock and cannot be added to the cart!'
        ),
        action1: { label: this.$t('OK') }
      })
    },
    notifyWrongAttributes () {
      this.$store.dispatch('notification/spawnNotification', {
        type: 'warning',
        message: this.$t(
          'No such configuration for the product. Please do choose another combination of attributes.'
        ),
        action1: { label: this.$t('OK') }
      })
    },
    async changeFilter (variant) {
      const selectedConfiguration = Object.assign({ attribute_code: variant.type }, variant)
      await filterChangedProduct(selectedConfiguration, this.$store, this.$router)
      this.getQuantity()
    },
    openSizeGuide () {
      this.$bus.$emit('modal-show', 'modal-sizeguide')
    },
    isOptionAvailable (option) { // check if the option is available
      const currentConfig = Object.assign({}, this.getCurrentProductConfiguration)
      currentConfig[option.type] = option
      return isOptionAvailableAsync(this.$store, { product: this.getCurrentProduct, configuration: currentConfig })
    },
    async getQuantity () {
      if (this.isStockInfoLoading) return // stock info is already loading
      this.isStockInfoLoading = true
      try {
        if (config.products.alwaysSyncPricesClientSide) {
          doPlatformPricesSync([this.getCurrentProduct]);
        }
        const res = await this.$store.dispatch('stock/check', {
          product: this.getCurrentProduct,
          qty: this.getCurrentProduct.qty
        })

        this.manageQuantity = res.isManageStock
        this.maxQuantity = res.isManageStock ? res.qty : null
      } finally {
        this.isStockInfoLoading = false
      }
    },
    handleQuantityError (error) {
      this.quantityError = error
    }
  },
  metaInfo () {
    const storeView = currentStoreView()
    return {
      /* link: [
        { rel: 'amphtml',
          href: this.$router.resolve(localizedRoute({
            name: this.getCurrentProduct.type_id + '-product-amp',
            params: {
              parentSku: this.getCurrentProduct.parentSku ? this.getCurrentProduct.parentSku : this.getCurrentProduct.sku,
              slug: this.getCurrentProduct.slug,
              childSku: this.getCurrentProduct.sku
            }
          }, storeView.storeCode)).href
        }
      ], */
      title: htmlDecode(this.getCurrentProduct.meta_title || this.getCurrentProduct.name),
      meta: this.getCurrentProduct.meta_description ? [{ vmid: 'description', name: 'description', content: htmlDecode(this.getCurrentProduct.meta_description) }] : []
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-primary: color(primary);
$color-tertiary: color(tertiary);
$color-secondary: color(secondary);
$color-white: color(white);
$bg-secondary: color(secondary, $colors-background);

.product {
  &__add-to-compare {
    display: none;
    @media (min-width: 767px) {
      display: block;
    }
  }
}
.addTo-Cart{
  background:#6D1F37;
  width:100%;
  max-width:250px;
  height:60px;
  border-radius:50px;
  font-size:18px;
  font-family: 'BrandonMedium';
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
}
.product-Breadcrumb{
  margin-top: 80px;
  margin-bottom: 10px;
  text-align: left;
  font-family: 'Brandon_reg';
  font-size: 14px;
}
.Pd-Short-Description{
  color:#404042;
  font-size:20px;
  font-family: 'Brandon_light';
  @media screen and (max-width:767px){
    font-size:16px;
    padding: 12px 0;
  }
}
.ProductDescription-Title{
  font-size: 40px;
  font-family: 'BrandonMedium';
  color:#6D1F37;
  margin: 28px 0px 0px 0px;
  @media (max-width: 767px) {
    font-size: 34px;
    margin: 10px 0px 0px 0px;
  }
}

.productDescription{
  .descriptionText{
    line-height: 25.74px;
    font-size:18px;
    font-family:'Brandon_light';
    @media (max-width: 767px) {
      font-size:16px;
      line-height: 24px;
    }
  }
}

.breadcrumbs {
  @media (max-width: 767px) {
    margin: 15px 0;
    padding: 15px 0 0 15px;
  }
}

.error {
  color: red;
  font-weight: bold;
  padding-bottom: 15px;
}
.data {
  @media (max-width: 767px) {
    border-bottom: 1px solid $bg-secondary;
  }
}

.image {
  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
}

.product-name {
  padding-top:60px;
  font-size: 40px;
  font-family: 'BrandonMedium';
  color:#6D1F37;
  line-height: 1.2;
  @media (max-width: 767px) {
    font-size: 34px;
     padding-top:30px;
  }
}

.variants-label {
  @media (max-width: 767px) {
    font-size: 14px;
  }
}

.variants-wrapper {
  @media (max-width: 767px) {
    padding-bottom: 30px;
  }

  .sizes {
    @media (max-width: 767px) {
      width: 100%;
    }
  }

  .size-guide {
    height: 40px;
    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0;
    }
  }
}

.product-top-section {
  @media (max-width: 767px) {
    padding: 0;
    background-color: $color-white;
  }
}

.add-to-buttons {
  @media (max-width: 767px) {
    padding-top: 30px;
    margin-bottom: 40px;
  }
}

.details {
  @media (max-width: 767px) {
    padding: 50px 15px 15px;
  }
}

.details-title {
  padding: 0 8px;

  @media (max-width: 767px) {
    font-size: 18px;
    margin: 0;
  }
}

.details-wrapper {
  @media (max-width: 767px) {
    position: relative;
    // max-height: 140px;
    // overflow: hidden;
    // transition: all 0.3s ease;
    // font-size: 14px;
  }

  &--open {
    max-height: none;
  }
}

.details-overlay {
  @media (max-width: 767px) {
    position: absolute;
    height: 75%;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    cursor: pointer;
    background: linear-gradient(rgba($color-white, 0), rgba($color-white, 1));
    &.hidden {
      display: none;
    }
  }
}

.action {
  &:hover {
    color: $color-tertiary;
  }
}

.attributes {
  list-style-type: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.product-image {
  mix-blend-mode: multiply;
  width: 460px;
}

.web-share {
  float: right;
}
</style>
