<template><div>User</div></template>

<script>
export default {
  name: "user",
  layout: "admin",
  middleware: ["admin-auth"],
};
</script>

<style scoped lang="scss"></style>
