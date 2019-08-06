<template>
  <div>
    <TheHeader />
    <div class="wrapper">
      <nuxt class="container" />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/organisms/TheHeader.vue';
export default {
  components: {
    TheHeader,
  },
};
</script>
