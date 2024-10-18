const express = require('express')
const app = express()
const port = 3000
// const prisma = require('./db/db')

app.get('/', async (req, res) => {
  // let data = await prisma.provinces.findMany({where: {}})
  res.send("Express region")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// 作用是允许express框架解析我们请求体中的数据
app.use(express.json()) // json格式
app.use(express.urlencoded({ extends: false })) // url编码格式

// 路由拆分，把功能拆分到不同的文件中
app.use('/api/provice', require('./routes/provice'))
app.use('/api/city', require('./routes/city'))
