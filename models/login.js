const dbUtils = require('../utils/db_util.js')

const login = {
    /**
     * 根据用户名和密码登录
     * @param  {string} password 用户密码
     * @param  {string} user 用户名称
     * @return {object|null}     查找结果
     */
    async loginByPassword( params ) {
        let _sql = `SELECT * from USER where password="${params.password}" and name="${params.name}" limit 1`
        let result = await dbUtils.query(_sql)
        let result_menu = await dbUtils.select('MENU',['id', 'key', 'title', 'path', 'icon'])
        if ( Array.isArray(result) && result.length > 0 && Array.isArray(result_menu)) {
            result = {
                login: result[0],
                menu: result_menu.map((v,k) => {
                    return {...result_menu[k]}
                })
            }
        } else {
            result = null
        }
        return result
    },
}


module.exports = login
