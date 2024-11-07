<template>
  <el-card shadow="always" :style="{ width: '500px' }">
    <el-form
      @submit.native.prevent="submitForm"
      :model="controls"
      :rules="rules"
      ref="form"
    >
      <h2>Войти в панель администратора</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>
      <div class="mb-1">
        <el-form-item>
          <el-button
            type="primary"
            round
            native-type="submit"
            :loading="loading"
            >Войти
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </el-card>
</template>

<script>
import { actions } from "@/store/auth";

export default {
  name: "login",
  layout: "empty",
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

            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");

            this.$message({
              message: "Вы авторизованы",
              type: "success",
            });
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
  mounted() {
    const { message } = this.$route.query;

    switch (message) {
      case "login":
        this.$message.info("Для начало войдите в систему!");
        this.$router.replace({ query: null });
        break;
      case "logout":
        this.$message.info("Вы вышли из системы!");
        this.$router.replace({ query: null });
        break;
    }
  },
};
</script>

<style scoped lang="scss"></style>
