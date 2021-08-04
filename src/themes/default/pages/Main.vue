<template>
  <div>Redirecting...</div>
</template>
<script>
export default {
  mounted () {
    this.$router.push(this.localizedRoute('/c/our-range'))
  }
}
</script>
