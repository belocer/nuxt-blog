<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb-2">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      @submit.native.prevent="submitForm"
      :model="controls"
      :rules="rules"
      ref="form"
    >
      <h2 class="mb-2">Редактировать пост {{ post.id }} {{ post.title }}</h2>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" v-model.trim="controls.text" rows="10" />
      </el-form-item>

      <el-upload
        ref="upload"
        class="mb-2"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleImageChange"
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Перетащите сюда изображение <em>или нажмите</em>
        </div>
        <div class="el-upload__tip" slot="tip">Файлы только: jpg/png</div>
      </el-upload>

      <div class="mb-2">
        <i class="el-icon-time"></i>
        <span class="mr-2">{{ new Date(post.date).toLocaleString() }}</span>

        <i class="el-icon-view"></i>
        <span>{{ post.views }}</span>
      </div>

      <div class="mb-1">
        <el-form-item>
          <el-button
            type="primary"
            round
            native-type="submit"
            :loading="loading"
            >Обновить
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "adminPostId",
  layout: "admin",
  head() {
    return { title: `Пост | ${this.post.title}` };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  data() {
    return {
      loading: false,
      controls: {
        text: "",
      },
      rules: {
        text: [
          {
            required: true,
            message: "Текст не должен быть пустым!",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw;
    },
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            const formData = {
              id: this.post._id,
              text: this.controls.text,
            };

            await this.$store.dispatch("post/update", formData);

            this.$message.success("Обновлено!");
            this.loading = false;
          } catch (e) {
            this.$message.error(e);
            this.$message.error("Ошибка!");
            this.loading = false;
          }
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.page-wrap {
  max-width: 600px;
}
</style>
