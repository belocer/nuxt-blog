<template>
  <div>Welcome to admin page</div>
</template>

<script>
export default {
  name: "adminConsole",
  layout: "admin",
  middleware: ["admin-auth"],
};
</script>

<style scoped lang="scss"></style>
