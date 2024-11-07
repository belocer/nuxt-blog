<template>
  <el-row class="container" type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      <app-post v-for="post in 3" :key="post" />
    </el-col>
  </el-row>
</template>

<script>
import AppPost from "@/components/main/Post.vue";
export default {
  name: "IndexPage",
  head: {
    title: "Главная страница блога",
    description: "Описание главной страницы БЛОГА",
    keywords: "блог, blog",
  },
  components: { AppPost },
};
</script>
