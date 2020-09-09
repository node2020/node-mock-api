const router = require('koa-router')()
router.prefix('')


//叠加套餐
router.post('/mno-service/internal/onlineStore/giveStoreCommodity', function (ctx, next) {
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

//叠加套餐
router.get('/simulator/vehicle/token', function (ctx, next) {
    //返回json格式
    ctx.body ='{"lastRequested":"2020-03-31T05:33:38.329Z","httpStatus":200,"error":null,"value":{"phoneNumber":"18030567713"},"version":"1.0.0","requestStatus":"CURRENT","status":0}'
})

module.exports = router
