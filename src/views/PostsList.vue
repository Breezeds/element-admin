<template>
  <div class="posts-list">
    <el-table :data="tableData">
      <el-table-column prop="title" label="标题" width="140">
      </el-table-column>
      <el-table-column prop="desc" label="帖子内容">
      </el-table-column>
       <el-table-column label="操作" width="120">
         <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    created() {
      this.fetchList()
    },
    methods: {
      fetchList() {
        this.$http.get('posts').then(res => {
          this.tableData = res.data
        })
      },
      handleEdit(row) {
        const { _id:id } = row
        this.$router.push(`/edit/${id}`)
      },
      handleDelete(row) {
        const { _id: id } = row
        this.$http.delete(`posts/${id}`).then(() => {
          this.$message({
            message: '帖子删除成功！',
            type: 'success'
          });
          this.fetchList()
        })
      },
    }
  };
</script>