<template>
  <div>
    <el-breadcrumb separator="/" class="mb-2">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.params.id }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "adminPostId",
  layout: "admin",
};
</script>

<style scoped lang="scss"></style>
