// 导入 express 框架
const express = require('express');
const router = express.Router();

// 导入科普路由处理函数
const coupeHandler = require('../router_handler/coupe_handler');

router.get('/whatcovid', coupeHandler.whatCovid);
router.get('/vaccines', coupeHandler.vaccinesType);
router.get('/questions', coupeHandler.moreQuestions);

// 将路由对象共享出去
module.exports = router;