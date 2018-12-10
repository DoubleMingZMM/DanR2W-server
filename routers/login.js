/**
 * 登录页
 */

const router = require('koa-router')()
const {loginByPassword} = require('../models/login')

module.exports = router.post('/login', async ctx => {
    const { name, password } = ctx.request.body
    const params = {
        name,
        password
    }
    const data = await loginByPassword(params)
    if (data.name === params.name && data.password === params.password) {
        ctx.response.status = 200
        ctx.body ={
            code: 200,
            data: [],
            mas: 'success'
        }
    }
})
