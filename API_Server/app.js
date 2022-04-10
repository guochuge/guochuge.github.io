const express = require('express');
const app = express();

// 导入并配置 cors 中间件
const cors = require('cors');
app.use(cors());

// 导入并使用 科普路由模块
const coupeRouter = require('./router/coupe');
app.use('/coupe', coupeRouter);
// 导入并使用 注意事项路由模块
const attentionRouter = require('./router/attentions');
app.use(attentionRouter);
// 导入并使用 接种禁忌路由模块
const conditionRouter = require('./router/conditions');
app.use(conditionRouter);

// 定义错误级别中间件
app.use((err, req, res, next) => {
  res.send({
    status: 1,
    message: err
  })
})

app.listen(3007, () => {
  console.log('express running at http://127.0.0.1:3007')
})