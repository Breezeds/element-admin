const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();

app.use(cors()) // 可以跨域访问后台接口 
app.use(express.json()) // 格式化前端传递的 json 数据

mongoose.connect('mongodb://localhost:27017/element-admin', {
    useNewUrlParser:true,
    useFindAndModify: true,
    useCreateIndex: true
});

// 创建帖子数据模型
const Posts = mongoose.model('Posts', new mongoose.Schema({
    title: {type: String},
    desc: {type: String}
}))


// 新增帖子
app.post('/api/posts', async(req, res) => {
    const createPosts = await Posts.create(req.body)
    res.send(createPosts)
})

// 帖子列表
app.get('/api/posts', async(req,res) => {
    const findPosts = await Posts.find()
    res.send(findPosts)
})

// 删除帖子
app.delete('/api/posts/:id', async(req,res) => {
    await Posts.findByIdAndDelete(req.params.id)
    res.send({
        code: 200,
        message: '删除成功！'
    })
})

// 帖子详情
app.get("/api/posts/:id", async(req, res) => {
    const posts = await Posts.findById(req.params.id)
    res.send(posts)
})

// 修改帖子
app.put('/api/posts/:id', async(req, res) => {
    const posts = await Posts.findByIdAndUpdate(req.params.id, req.body);
    res.send(posts)
})

app.listen(3001, () => {
    console.log('runing 3001');
})