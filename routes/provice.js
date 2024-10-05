const router = require('express').Router()
const prisma = require('../db/db')

router.get('/', async (req, res) => {
  let data = await prisma.provinces.findMany({where: {}})
  res.json({
    success: true,
    data: data,
  })
})


router.post('/', async (req, res) => {
  console.log("BB", req)
  await prisma.provinces.createMany({
    data: req.body
  })
  res.json({
    success: true,
    data: {}
  })
})

module.exports = router
