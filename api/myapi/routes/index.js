const router = require('koa-router')()
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
router.get('/', async (ctx, next) => {
    var sleep_time = 20000;
    console.log("开始休眠..." + sleep_time+"ms")
    await sleep(sleep_time)
    console.log("休眠结束...")
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
