<template>
  <div class="wrap-page">
    <el-form
      @submit.native.prevent="submitForm"
      :model="controls"
      :rules="rules"
      ref="form"
    >
      <h2 class="mb-2">Создать пост</h2>
      <el-form-item label="Заголовок" prop="title" class="mb-2">
        <el-input v-model.trim="controls.title" />
      </el-form-item>

      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" v-model="controls.text" rows="10" />
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

      <div class="mb-1">
        <el-form-item>
          <el-button
            type="primary"
            round
            native-type="submit"
            :loading="loading"
            >Создать пост
          </el-button>
        </el-form-item>
      </div>
    </el-form>

    <el-button type="success" @click="previewDialog = true"
      >Предпросмотр поста</el-button
    >

    <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
      <span v-html="controls.title" class="mb-2 d-flex"></span>
      <div :key="controls.text">
        <vue-markdown>{{ controls.text }}</vue-markdown>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="previewDialog = false">Закрыть</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "create",
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      image: null,
      loading: false,
      controls: {
        title: "",
        text: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "Укажите Title!",
            trigger: "blur",
          },
        ],
        text: [
          {
            required: true,
            message: "Текст не должен быть пустым!",
            trigger: "blur",
          },
        ],
      },
      previewDialog: false,
    };
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw;
    },
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.image) {
          this.loading = true;
          try {
            const formData = {
              title: this.controls.title,
              text: this.controls.text,
              image: this.image,
            };

            await this.$store.dispatch("post/create", formData);

            this.$message.success("Создан!");
            this.controls.title = "";
            this.controls.text = "";
            this.controls.image = null;
            this.$refs.upload.clearFiles();
          } catch (e) {
            this.$message.error(e);
            setTimeout(() => this.$message.error("Ошибка!"), 500);
          } finally {
            this.loading = false;
          }
        } else {
          this.$message.warning("Форма не валидна!");
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
form {
  max-width: 600px;
}
</style>
