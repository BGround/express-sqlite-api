const router = require('express').Router()
const prisma = require('../db/db')

router.get('/', async (req, res) => {
  const { name } = req.query; // 从查询参数中获取 name
  let data = await prisma.citys.findMany({
    where: {
      name: name // 根据 name 进行过滤
    }
  });
  res.json({
    success: true,
    data: data,
  });
});

router.post('/', async (req, res) => {
  await prisma.citys.createMany({
    data: req.body
  })
  res.json({
    success: true,
    data: {}
  })
})

module.exports = router
