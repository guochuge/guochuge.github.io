import {request} from './request'
import moment from 'moment'

const date = moment(new Date()).format("YYYY-MM-DD")

const key = 'd9550f28b85feeb7fbae4ee96a024a07'

// 获取疫情信息
export function getCovidInfo() {
  const url = 'http://api.tianapi.com/ncov/index?key='+ key + '&date=' + date;
  const res = request({
    url,
    method: 'get'
  })
  return res
}

// 创建新增信息对象
export class IncrInfo {
  constructor(desc) {
    // 新增确诊 
    this.yesterdayConfirmedCountIncr = desc.yesterdayConfirmedCountIncr
    // 新增本土 
    this.currentConfirmedIncr = desc.currentConfirmedIncr
    // 新增境外 
    this.yesterdaySuspectedCountIncr = desc.yesterdaySuspectedCountIncr
    // 新增无症状 
    this.seriousIncr = desc.seriousIncr
  }
}

// 创建累计信息对象
export class AccuInfo {
  constructor(desc) {
    // 累计确诊 
    this.confirmedCount = desc.confirmedCount
    // 累计境外 
    this.suspectedCount = desc.suspectedCount
    // 累计治愈 
    this.curedCount = desc.curedCount
    // 累计死亡 
    this.deadCount = desc.deadCount
  }
}

// 创建新闻信息对象
export class NewsInfo {
  constructor(news) {
    // 发布时间
    this.pubDateStr = news.pubDateStr
    // 新闻标题
    this.title = news.title
    // 新闻摘要
    this.summary = news.summary
    // 新闻 url
    this.sourceUrl = news.sourceUrl
  }
}

// 获取国内各省实时确诊人数
export async function getChinaData() {
  // 挖数据 国内疫情接口
  const url = `http://111.231.75.86:8000/api/provinces/CHN/`;
  return request({
    url,
    method: "get",
  })
};

