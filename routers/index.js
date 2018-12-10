/**
 * 整合所有子路由
 */

const router = require('koa-router')()

const home = require('./home')
const login = require('./login')

router.use(home.routes(), home.allowedMethods())
router.use(login.routes(), login.allowedMethods())

module.exports = router
