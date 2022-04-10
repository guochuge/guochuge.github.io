import {request} from './request'

export function getConditions() {
  return request({
    url: '/conditions'
  })
}
