<template>
  <el-card class="comment">
    <div class="comment-header">
      <span class="name">Person name</span>
      <span>
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
      </span>
    </div>
    <div class="comment-text">Lorem ipsum dolor sit amet.</div>
  </el-card>
</template>

<script>
export default {
  props: ["comment"],
};
</script>

<style scoped lang="scss">
.comment {
  margin-bottom: 30px;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  .name {
    font-size: 12px;
    font-weight: 600;
    color: #606060;
  }
}

.comment-text {
  white-space: pre-line;
}
</style>
