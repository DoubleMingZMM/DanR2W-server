/**
 * 主页子路由
 */

const router = require('koa-router')()
const { getUserInfoByUserId } = require('../models/user_info')

module.exports = router.get('/user/:id', async ctx => {
  const { id } = ctx.params
  const data = await getUserInfoByUserId(id)
  ctx.response.status = 200
  ctx.body = {
    code: 200,
    data
  }
})
