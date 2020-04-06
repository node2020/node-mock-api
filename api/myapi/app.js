const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
//和koa-body(上传文件用)冲突
// const bodyparser = require('koa-bodyparser')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const koaStatic = require('koa-static')

const index = require('./routes/index')
const users = require('./routes/users')
const demo = require('./routes/demo')
const mno_service = require('./routes/mno-service')
const file = require('./routes/file')

// error handler
onerror(app)

// middlewares
// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '/public'))
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}))
app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(demo.routes(), demo.allowedMethods())
app.use(mno_service.routes(), mno_service.allowedMethods())
app.use(file.routes(), file.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
