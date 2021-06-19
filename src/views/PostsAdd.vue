<template>
  <el-form ref="form" :model="form" label-width="80px" label-position="top">
    <el-form-item label="帖子标题">
      <el-input v-model="form.title"></el-input>
    </el-form-item>
    <el-form-item label="帖子内容">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$http.post('posts', this.form).then(() => {
          this.$message({
            message: '帖子创建成功！',
            type: 'success'
          });
          this.$router.push('/list')
        })
      }
    }
  }
</script>


