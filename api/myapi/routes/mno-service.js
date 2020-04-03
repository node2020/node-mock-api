const router = require('koa-router')()
router.prefix('/mno-service')

//叠加套餐
router.post('/internal/asynchronousSim/giveStoreCommodity', function (ctx, next) {

    //从request中获取GET请求
    let request = ctx.request;
    let body = request.body;
    console.log("参数内容", body)
    let status = 'SUCCEED'
    //返回json格式
    ctx.body = {
        status
    }
})

module.exports = router
