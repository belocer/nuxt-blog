<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column prop="title" label="Название" />
    <el-table-column label="Дата" width="180">
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{
          new Date(date).toLocaleString()
        }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="views" label="Просмотры">
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="comments" label="Комментарии">
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-s-comment"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{ row }">
        <el-tooltip effect="dark" content="Редактировать пост" placement="top">
          <el-button icon="el-icon-edit" circle @click="open(row._id)" />
        </el-tooltip>
        <el-tooltip effect="dark" content="Удалить пост" placement="top">
          <el-button
            icon="el-icon-delete"
            type="danger"
            circle
            @click="remove(row._id)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "list",
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({ store }) {
    const posts = await store.dispatch("post/fetchAdmin");
    return { posts };
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`);
    },
    async remove(id) {
      this.$confirm("Удалить пост с id: " + id, "Внимание!", {
        confirmButtonText: "Удалить",
        cancelButtonText: "Отменить",
        type: "warning",
      })
        .then(() => {
          this.$store.dispatch("post/remove", id);
          this.posts = this.posts.filter((p) => p._id !== id);
          this.$message({
            type: "success",
            message: "Удалено!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Отмена удаления",
          });
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
