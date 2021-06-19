<template>
  <el-form ref="form" :model="form" label-width="80px" label-position="top">
    <el-form-item label="帖子标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="帖子内容">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button @click="onCancle">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {}
      }
    },
    created() {
      this.fetch()
    },
    methods: {
      fetch() {
        this.$http.get(`posts/${this.$route.params.id}`).then(res => {
          this.form = res.data
        })
      },
      onSubmit() {
        this.$http.put(`posts/${this.$route.params.id}`, this.form).then(() => {
          this.$message({
            message: '帖子更新成功！',
            type: 'success'
          });
          this.$router.push('/list')
        })
      },
      onCancle() {
        this.$router.push('/list')
      }
    }
  }
</script>


