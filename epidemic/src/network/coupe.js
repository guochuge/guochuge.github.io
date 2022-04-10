import {request} from './request'

export function getIntroduce() {
  return request({
    url: '/coupe/whatcovid'
  })
}

export function getVaccines() {
  return request({
    url: '/coupe/vaccines'
  })
}

export function getQuestions() {
  return request({
    url: '/coupe/questions'
  })
}