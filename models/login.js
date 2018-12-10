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
        let result = await dbUtils.select(_sql)
        if ( Array.isArray(result) && result.length > 0 ) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },
}


module.exports = login
