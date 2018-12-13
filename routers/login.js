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
    if (data.login.name === params.name && data.login.password === params.password) {
        ctx.response.status = 200
        ctx.body ={
            code: 200,
            data: {
                isLogin: true,
                name: 'Daniel',
                menus: data.menu
            },
            msg: 'success'
        }
    }
})
