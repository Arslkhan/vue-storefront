<template>
  <div class="media-gallery-carousel">
    <VueSlickCarousel
      :arrows="true"
      ref="carousel"
      :speed="carouselTransitionSpeed"
      @pageChange="pageChange"
      :navigate-to="currentPage"
      class="mainGallery-Carousel"
    >
      <div
        v-for="(images, index) in gallery"
        :key="images.src"
      >
        <div
          class="product-image-container bg-cl-secondary"
          :class="{'video-container w-100 h-100 flex relative': images.video}"
        >
          <product-image
            v-show="hideImageAtIndex !== index"
            @dblclick="openOverlay"
            class="pointer image"
            :image="images"
            :alt="productName | htmlDecode"
          />
          <product-video
            v-if="images.video && (index === currentPage)"
            v-bind="images.video"
            :index="index"
            @video-started="onVideoStarted"
          />
        </div>
      </div>
    </VueSlickCarousel>
    <i
      class="zoom-in material-icons p15 cl-bgs-tertiary pointer"
      @click="openOverlay"
    >zoom_in</i>

     <div class="Galleries" v-if="gallery.length > 1">
        <div class="main-gallery">
        <VueSlickCarousel
          v-bind="setting"
          :infinite = "false"
          ref="c2"
          :draggable = false
          :slidesToShow='5'
          :slidesToScroll='1'
          :rows='1'
          :initialSlide='0'
          class="thumbnail-arrows"
          :speed=300
          @afterChange="pageChange">
          >
        <div v-for="(images, index) in gallery" :key="images.src">
          <img :src="images.src" :alt="productName" id="thumnail" :class="{'active-img-slide': selected ? images.src == selected : (!firstslideIndex ? index == 0 : index === 'noone'), 'drag-active' : index === firstslideIndex }"   @click="onSelect(index,images.src)" />
        </div>
      </VueSlickCarousel>
      </div>
      </div>

   <!-- <div class="ProductThumbnails">
     <carousel
       :per-page-custom="[
          [480, 0],
          [768, 2],
          [1000, 3],
          [1200, 4],
        ]"
      :mouse-drag="false"
      :navigation-enabled="true"
      :pagination-enabled="false"
      pagination-active-color="#828282"
      pagination-color="transparent"
      navigation-next-label="<i class='material-icons p15 cl-bg-tertiary pointer'>keyboard_arrow_right</i>"
      navigation-prev-label="<i class='material-icons p15 cl-bg-tertiary pointer'>keyboard_arrow_left</i>"
      ref="carousel2"
      :speed="carouselTransitionSpeed"
      @pageChange="pageChange"
      :navigate-to="currentPage"
    >
      <slide
        v-for="(images, index) in gallery"
        :key="images.src"
      >
        <div
          class="product-image-container bg-cl-secondary"
          :class="{'video-container w-100 h-100 flex relative': images.video}"
        >
          <product-image
            v-show="hideImageAtIndex !== index"
            @dblclick="openOverlay"
            class="pointer image"
            :image="images"
            :alt="productName | htmlDecode"
          />
          <product-video
            v-if="images.video && (index === currentPage)"
            v-bind="images.video"
            :index="index"
            @video-started="onVideoStarted"
          />
        </div>
      </slide>
    </carousel>
     </div> -->
  </div>
</template>

<script>
import config from 'config'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ProductImage from './ProductImage'
import ProductVideo from './ProductVideo'
import reduce from 'lodash-es/reduce'
import map from 'lodash-es/map'

export default {
  name: 'ProductGalleryCarousel',
  components: {
    'Carousel': () => import(/* webpackChunkName: "vue-carousel" */ 'vue-carousel').then(Slider => Slider.Carousel),
    'Slide': () => import(/* webpackChunkName: "vue-carousel" */ 'vue-carousel').then(Slider => Slider.Slide),
    ProductImage,
    ProductVideo,
    VueSlickCarousel
  },
  props: {
    gallery: {
      type: Array,
      required: true
    },
    productName: {
      type: String,
      default: ''
    },
    configuration: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      selected: '',
      firstslideIndex: null,
      carouselTransition: true,
      carouselTransitionSpeed: 0,
      currentColor: 0,
      currentPage: 0,
      hideImageAtIndex: null,
      setting: {
        'lazyLoad': 'onDemand',
        'responsive': [
          {
            'breakpoint': 1199,
            'settings': {
              'slidesToShow': 4
            }
          },
          {
            'breakpoint': 991,
            'settings': {
              'slidesToShow': 3
            }
          },
          {
            'breakpoint': 767,
            'settings': {
              ' "slidesToShow"': 4
            }
          }
        ]
      }
    }
  },
  computed: {},
  beforeMount () {
    this.$bus.$on('product-after-configure', this.selectVariant)
    this.$bus.$on('product-after-load', this.selectVariant)
  },
  mounted () {
    this.selectVariant()

    if (this.configuration.color) {
      const { color } = this.configuration
      this.currentColor = color.id
    }

    this.$emit('loaded')
  },
  beforeDestroy () {
    this.$bus.$off('product-after-configure', this.selectVariant)
    this.$bus.$off('product-after-load', this.selectVariant)
  },
  methods: {
    onSelect (slide, imgSrc) {
      this.selected = imgSrc
      this.firstslideIndex = null
      if (!this.afterchangeCalled && !this.startSlide) {
        setTimeout(() => {
        this.$refs.carousel.goTo(slide)
        this.startSlide = 0
      }, 500);
      } else {
        this.$refs.carousel.goTo(slide)
        this.startSlide = 0
      }
      this.slideToChange = slide
      this.afterchangeCalled = null
    },

    pageChange (index) {
      this.stopVideo()
      this.currentPage = index
      this.hideImageAtIndex = null
      this.afterchangeCalled = 'called'
    },
    beforeChange (oldSlide, newSlide) {
      this.$emit('pageChange', newSlide)
      this.selected = ""
      this.firstslideIndex = newSlide
    },

    navigate (index) {
      if (index < 0) return
      this.currentPage = index
    },
    async selectVariant (configuration) {
      await this.$nextTick()
      if (config.products.gallery.mergeConfigurableChildren) {
        const option = reduce(map(this.configuration, 'attribute_code'), (result, attribute) => {
          result[attribute] = this.configuration[attribute].id
          return result
        }, {})
        if (option) {
          let index = this.gallery.findIndex(
            obj => obj.id && Object.entries(obj.id).toString() === Object.entries(option).toString(), option)
          if (index < 0) index = this.gallery.findIndex(obj => String(obj.id && obj.id.color) === String(option.color))
          this.navigate(index)
        }
      }

      this.$emit('close')
    },
    openOverlay () {
      const currentSlide = this.$refs.carousel.currentPage
      this.$emit('toggle', currentSlide)
    },
    switchCarouselSpeed () {
      const { color } = this.configuration
      if (color && this.currentColor !== color.id) {
        this.currentColor = color.id
        this.carouselTransitionSpeed = 0
      } else {
        this.carouselTransitionSpeed = 500
      }
    },
    pageChange (index) {
      this.switchCarouselSpeed()
      this.hideImageAtIndex = null
    },
    onVideoStarted (index) {
      this.hideImageAtIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~theme/css/animations/transitions';
.media-gallery-carousel {
  position: relative;
  text-align: center;
  height: 100%;
}
.zoom-in {
  position: absolute;
  bottom: 150px;
  right: 0;
}
.image{
  opacity: 1;
  will-change: opacity;
  transition: .3s opacity $motion-main;
  &:hover{
    opacity: .9;
  }
}
.video-container {
  align-items: center;
  justify-content: center;
}

</style>

<style lang="scss">
.mainGallery-Carousel .slick-next {
  right: -22px;
}
.mainGallery-Carousel{
  .slick-next{
    right: -10px;
    @media screen and (max-width:374px) {
      right: -16px;
    }
    &:before{
      color: transparent;
      background: url('/assets/right-arrow-svg.svg');
    }
  }
  .slick-prev{
    &:before{
      color: transparent;
      background: url('/assets/left-arrow-svg.svg');
    }
    @media screen and (max-width:480px) {
      left:-15px;
    }
  }
  //   .slick-next{
  //     &:before{
  //       content:none;
  //     }
  //   }
  //   .slick-prev{
  //     &:before{
  //       content:none;
  //     }
  //   }
}

.thumbnail-arrows{
  padding-left: 5px;
  @media screen and (min-width:400px)and(max-width:480px) {
     padding-left: 10px;
  }
  .slick-slide{
    img{
      border: 1px solid #d5d5d5;
      max-width: 90px;
      max-height: 90px;
      @media screen and (max-width:440px) {
         max-width: 72px;
         max-height: 72px;
      }
      @media screen and (max-width:374px) {
         max-width: 65px;
         max-height: 65px;
      }
    }
  }
  .slick-next{
    right: -10px;
    @media screen and (max-width:374px) {
      right: -16px;
    }
    &:before{
      color: transparent;
      background: url('/assets/right-arrow-svg.svg');
    }
  }
  .slick-prev{
    &:before{
       color: transparent;
       background: url('/assets/left-arrow-svg.svg');
    }
    @media screen and (max-width:480px) {
      left:-15px;
    }
  }
}

.ProductThumbnails{
  .product-image{
    img{
      width: 92px !important;
      height: auto;
    }
  }
}
.media-gallery-carousel,
.media-zoom-carousel {
  .VueCarousel-pagination {
    position: absolute;
    bottom: 15px;
    @media (max-width: 767px) {
      display: none;
    }
  }
  .VueCarousel-navigation-button {
    margin: 0;
    transform: translateY(-50%) !important;
  }
  .VueCarousel-slide {
    backface-visibility: unset;
  }
  .VueCarousel-navigation {
    opacity: 0;
    &--disabled {
      display: none;
    }
  }
  .VueCarousel-dot {
    padding: 8px !important;
    button {
      border: 2px solid #828282;
    }
  }
  &:hover {
    .VueCarousel-navigation {
      opacity: .9;
    }
    .VueCarousel-navigation-button {
      transition: opacity 3s;
      &:after {
        background-color: transparent;
      }
    }
  }
}
</style>
