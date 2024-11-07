<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://top10a.ru/wp-content/uploads/2020/01/berlin-header-image.jpg"
          alt="Изображение поста"
          class="post-img"
        />
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex
        mollitia nisi obcaecati quas, voluptatum. Accusantium itaque labore quam
        quia?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex
        mollitia nisi obcaecati quas, voluptatum. Accusantium itaque labore quam
        quia?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ex
        mollitia nisi obcaecati quas, voluptatum. Accusantium itaque labore quam
        quia?
      </p>
    </main>
    <footer>
      <app-form-comment
        class="mb-3"
        @created="createCommentHandler"
        v-if="canAddComment"
      />

      <div class="comments" v-if="true">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from "~/components/main/Coomment.vue";
import AppFormComment from "~/components/main/CommentForm.vue";

export default {
  components: {
    AppComment,
    AppFormComment,
  },
  data() {
    return {
      canAddComment: true,
    };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  methods: {
    createCommentHandler() {
      console.log("Сообщение добавлено!");
      this.canAddComment = false;
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 45px;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.post-image {
  max-width: 100%;
  padding: 20px 0;
  text-align: center;

  img {
    max-width: 100%;
  }
}

.post-content {
  margin-bottom: 45px;

  p {
    margin-bottom: 30px;
  }
}
</style>
