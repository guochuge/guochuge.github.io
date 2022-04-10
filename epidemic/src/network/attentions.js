import {request} from './request'

export function getAttentions() {
  return request({
    url: '/attentions'
  })
}
