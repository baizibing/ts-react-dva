import crossJsonp from 'jsonp'

const defaultOption = {
  // 配置callback的key
  param: "jsonpCallback",
  // 生成callback的名字
  prefix: "callback"
}
const formate = function (params) {
  let str = "";
  for (const key in params) {
    str += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`
  }
  return str;
}
const jsonp = function (url, params) {
  url = url.includes('?') ? url + formate(params) : url + '?' + formate(params);
  return new Promise((resolve, reject) => {
    crossJsonp(url, defaultOption, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
export default jsonp;
