const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

router.prefix('/file')

router.post('/upload', function (ctx, next) {
  let status= "SUCCEED"
  let message = "文件上传成功"
  //接受一个from-data参数
  let name = ctx.request.body.name
  console.log("name",name)
  // 上传单个文件
  const file = ctx.request.files.file; // 获取上传文件
  if(file==null||file==undefined){
    status="FAILED"
    message="文件为空"
    return ctx.body = {
      status,
      message
    }
  }

  // 创建可读流
  const reader = fs.createReadStream(file.path);
  let filePath = path.join(__dirname, '../public/upload/') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);


  let filename = file.name
  let data={
    filename
  }
  return ctx.body = {
    status,
    message,
    data
  }
})

module.exports = router
