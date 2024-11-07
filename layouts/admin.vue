<template>
  <div class="admin-layout-wrap">
    <app-header />
    <el-container :style="{ height: '100%' }">
      <el-container>
        <el-aside width="250px">
          <app-aside :style="{ height: '100%' }" />
        </el-aside>
        <el-main>
          <nuxt />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from "@/components/admin/Aside";
import AppHeader from "@/components/admin/Header";

export default {
  components: { AppAside, AppHeader },
};
</script>

<style scoped lang="scss">
.admin-layout-wrap {
  width: 100%;
  height: 100vh;
}
</style>
