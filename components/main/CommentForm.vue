<template>
  <el-form
    @submit.native.prevent="submitForm"
    :model="controls"
    :rules="rules"
    ref="form"
  >
    <h1>Добавить комментарий</h1>
    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>

    <el-form-item label="Текст комментария" prop="text">
      <el-input
        type="textarea"
        v-model.trim="controls.text"
        resize="none"
        :rows="2"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" round native-type="submit" :loading="loading"
        >Добавить комментарий
      </el-button>
      <el-button>Сбросить данные формы</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: "",
        text: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Имя не должно быть пустым",
            trigger: "blur",
          },
        ],
        text: [
          {
            required: true,
            message: "Введите Ваш комментарий",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          console.log("Form is valid!!!");
          const formData = {
            name: this.controls.name,
            text: this.controls.text,
            postId: "",
          };

          try {
            this.$message.success("Комментарий добавлен!");
            this.$emit("created");
            this.loading = false;
          } catch (e) {
            this.$message.error(e);
            this.$message.error("Ошибка!");
            this.loading = false;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
