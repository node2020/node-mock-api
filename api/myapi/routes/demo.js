const router = require('koa-router')()

router.prefix('/demo')

//get 请求
router.get('/get', function (ctx, next) {
    let url = ctx.url;

    //从request中获取GET请求
    let request = ctx.request;
    let req_query = request.query;
    let body = request.body;
    let method = ctx.method;
    let req_querystring = request.querystring;
    console.log("name: ", req_query.name)

    //从上下文中直接获取
    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    //返回json格式
    ctx.body = {
        url,
        method,
        req_query,
        req_querystring,
        body,
        ctx_query,
        ctx_querystring
    }
})

//post 请求
router.post('/post', function (ctx, next) {
    let body = ctx.request.body;
    let method = ctx.method;
    let url = ctx.request.url;
    let status = 'SUCCEED'
    let data = {
        body,
        method,
        url
    }
   ctx.body = {
        status,
        data
    }
})

module.exports = router
