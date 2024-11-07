<template>
  <el-form
    @submit.native.prevent="submitForm"
    :model="controls"
    :rules="rules"
    ref="form"
  >
    <h2>Создать пользователя</h2>
    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>
    <el-form-item label="Пароль" prop="password">
      <el-input v-model.trim="controls.password" type="password" />
    </el-form-item>
    <div class="mb-1">
      <el-form-item>
        <el-button type="primary" round native-type="submit" :loading="loading"
          >Создать
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
export default {
  name: "user",
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      loading: false,
      controls: {
        login: "",
        password: "",
      },
      rules: {
        login: [
          {
            required: true,
            message: "Введите логин.",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Введите пароль.",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Парль должен быть не менее 6 символов.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true;
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password,
            };

            await this.$store.dispatch("auth/createUser", formData);

            this.$message({
              message: "Пользователь создан!",
              type: "success",
            });
            this.controls.login = "";
            this.controls.password = "";
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
form {
  max-width: 600px;
}
</style>
