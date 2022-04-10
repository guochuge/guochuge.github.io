// 导入 express 框架
const express = require('express');
const router = express.Router();

// 导入科普路由处理函数
const attentionHandler = require('../router_handler/attentions_handler');

router.get('/attentions', attentionHandler.getAttentions);

// 将路由对象共享出去
module.exports = router;