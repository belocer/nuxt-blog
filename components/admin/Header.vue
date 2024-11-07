<template>
  <el-header class="admin-header">
    <nuxt-link to="/" class="admin-header-link">
      <i class="el-icon-s-home"></i>
      Logo
    </nuxt-link>
    <el-button plain icon="el-icon-right" @click="logOut">Выйти</el-button>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/admin/login?message=logout");
    },
  },
};
</script>

<style scoped lang="scss">
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f1eded;

  .admin-header-link {
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 24px;
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      transition: all 0.3s;
      text-decoration: underline;
    }
  }
}
</style>
