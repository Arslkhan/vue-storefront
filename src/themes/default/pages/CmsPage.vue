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
    <div class="container pb60" v-html="cmsPageContent.content" />
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
    font-family: 'BrandonMedium';
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
</style>
