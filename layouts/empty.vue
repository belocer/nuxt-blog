<template>
  <div class="empty-layout">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "empty",
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(val) {
      this.$message.error(val);
    },
  },
};
</script>

<style scoped lang="scss">
.empty-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 60px;
}
</style>
