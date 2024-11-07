<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post-body">
      <img
        src="https://top10a.ru/wp-content/uploads/2020/01/berlin-header-image.jpg"
        alt="Изображение поста"
        class="post-img"
      />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">Открыть</el-button>

      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = "test-id";
      this.$router.push(`/post/${id}`);
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  margin-bottom: 30px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-body {
}

.post-img {
  max-width: 100%;
  height: auto;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>
