<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Ошибка 404</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.error-content {
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-title {
  color: darkred;
  margin-bottom: 30px;
}
</style>
