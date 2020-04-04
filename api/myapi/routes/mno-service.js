const router = require('koa-router')()
router.prefix('/mno-service')


//叠加套餐
router.post('/internal/asynchronousSim/giveStoreCommodity', function (ctx, next) {
    let status = 'SUCCEED'
    let errorCode = ""
    let errorMessage = ""
    //从request中获取GET请求
    let request = ctx.request;
    let body = request.body;
    if (body.vin == null||body.vin==""||body.vin==undefined){
        errorCode = "1005"
        status="FAILED"
        errorMessage="vin码为空"
    }
    else if (body.commoNo == null||body.commoNo==""||body.commoNo==undefined){
        status="FAILED"
        errorCode = "1006"
        errorMessage="commoNo为空"
    }
    console.log("参数内容", body)

    //返回json格式
    ctx.body = {
        status,
        errorCode,
        errorMessage
    }
})

module.exports = router
