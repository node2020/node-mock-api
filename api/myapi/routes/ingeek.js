const router = require('koa-router')()
router.prefix('')
let sleep = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(1)
            } catch (e) {
                reject(0)
            }
        }, delay);
    })
}
router.post('/tsp/apis/v3/access/token', async (ctx, next) =>{
    //从request中获取GET请求
    let request = ctx.request;
    let body = request.body;
    console.log("body..." + JSON.stringify(body))
    let head = request.headers
    console.log("head..." + JSON.stringify(head))
    let sleep_time = 1000;
    let code = 0
    let msg = "成功"
    let token = "123131231231231sdfsdf"
    let data = {
        token
    }
    console.log("开始休眠..." + sleep_time + "ms")
    await sleep(sleep_time)
    console.log("休眠结束...")
    //返回json格式
    ctx.body = {
        code,
        msg,
        data
    }
})

router.post('/tsp/apis/v3/tsp/vehicleoperation2', async (ctx, next) =>{
    //从request中获取GET请求
    let request = ctx.request;
    let body = request.body;
    console.log("body..." + JSON.stringify(body))
    let head = request.headers
    console.log("head..." + JSON.stringify(head))
    let sleep_time = 2000;
    let code = 0
    let msg = "成功"
    let uuid = body.uuid
    let data = {
        uuid
    }
    console.log("开始休眠..." + sleep_time + "ms")
    await sleep(sleep_time)
    console.log("休眠结束...")
    //返回json格式
    ctx.body = {
        code,
        msg,
        data
    }
})
module.exports = router
