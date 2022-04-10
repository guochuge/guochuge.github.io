// 导入 express 框架
const express = require('express');
const router = express.Router();

// 导入接种禁忌路由处理函数
const conditionHandler = require('../router_handler/conditions_handler');

router.get('/conditions', conditionHandler.getConditions);

// 将路由对象共享出去
module.exports = router;