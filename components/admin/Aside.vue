<template>
  <el-menu :style="{ height: '100%' }" :default-active="$route.path" router>
    <el-menu-item index="/admin">
      <i class="el-icon-setting"></i>
      <span>Консоль</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-document-add"></i>
      <span>Создать</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Все посты</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Пользователи</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  methods: {},
};
</script>

<style scoped lang="scss"></style>
