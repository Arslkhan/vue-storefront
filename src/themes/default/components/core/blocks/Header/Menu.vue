
<template>
  <section class="offers container my30 px15 cl-black">
    <div class="row">
      <cms-block :identifier="'main-menu'" />
      
      <!-- ... -->
    </div>
  </section>
</template>

<script>
import CmsBlock from 'theme/components/core/blocks/Cms/Block'
export default {
  name: 'PromotedOffers',
  components: {
    CmsBlock
  },
  // ...
}
</script>