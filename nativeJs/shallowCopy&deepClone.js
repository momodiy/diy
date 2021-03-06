/*
* Created by Steven Lee
* Date: 2021/4/10
* Time: 19:21
* Project: DIY
* */

function shallowCopy(obj) {
  if (typeof obj !== 'object') return

  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

function deepClone(obj) {
  if (typeof obj !== 'object') return;
  const newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  return newObj;
}

let obj = {
  name: 'Steven Lee',
  props: {
    static: true
  }
}
