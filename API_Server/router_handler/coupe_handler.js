// 导入数据库模块
const db = require('../db/index');

// 定义简介类型，疫苗类型，问答类型
const introduceSchema = new db.Schema({
  name: String,
  source: String,
  definition: Array,
  characteristic: Array,
})
const vaccineSchema = new db.Schema({
  name: String,
  source: String,
  kinds: Array,
})
const morequestionSchema = new db.Schema({
  name: String,
  source: String,
  questions: Array,
})

// 新冠病毒简介路由的处理函数
exports.whatCovid = (req, res) => {
  const introduce = db.model('introduce', introduceSchema);
  introduce.find((err, docs) => {
    if (!err) {
      res.send({
        status: 0,
        message: '获取简介成功！',
        data: docs,
      })
    }
  })
}

// 新冠疫苗分类路由的处理函数
exports.vaccinesType = (req, res) => {
  const vaccines = db.model('vaccines', vaccineSchema);
  vaccines.find((err, docs) => {
    if (!err) {
      res.send({
        status: 0,
        message: '获取疫苗分类成功！',
        data: docs,
      })
    }
  })
}

// 更多疑问路由的处理函数
exports.moreQuestions = (req, res) => {
  const morequestions = db.model('morequestions', morequestionSchema);
  morequestions.find((err, docs) => {
    if (!err) {
      res.send({
        status: 0,
        message: '获取更多疑问成功！',
        data: docs,
      })
    }
  })
}
