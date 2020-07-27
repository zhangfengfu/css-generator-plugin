const { scriptgetRegList } = require('./createReg')
const { pushPreObj, clearPreArray, renderCss } = require('./preRender')
const { isFunction } = require('lodash')
const { setConfig, getConfig } = require('./config')
const { COLORS } = require('./constant')

const NODE_ID = 'autocss'
const cssSet = new Set()

function getClass () {
  cssSet.clear()
  clearPreArray() // 清空预编译
  const sourceStr = document.body.innerHTML
  const reg = /((?<=class=(["']))[\s\S]*?(?=\2))/gi
  const classNameList = sourceStr.match(reg)
  if (classNameList) {
    classNameList.forEach(hasClassNameStr => {
      const className = hasClassNameStr.replace(/[^a-zA-Z0-9-]/g, ' ')
      className.split(' ').forEach(filterClass)
    })
  }
  return null
}

function filterClass (classStr) {
  if (cssSet.has(classStr)) {
    return null
  }
  cssSet.add(classStr)
  scriptgetRegList().forEach((rule) => {
    const reg = isFunction(rule.regExp) ? rule.regExp() : rule.regExp
    const res = classStr.match(reg)
    if (res !== null) {
      pushPreObj({ classStr, ...rule.render(res) })
    }
  })
}

function genCss () {
  getClass()
  const cssStr = renderCss()
  const oldStyleNode = document.getElementById(NODE_ID)
  if (oldStyleNode) {
    oldStyleNode.remove()
  }
  const style = document.createElement('style')
  style.type = 'text/css'
  style.rel = 'stylesheet'
  style.setAttribute('id', NODE_ID)
  style.appendChild(document.createTextNode(cssStr))
  document.getElementsByTagName('head')[0].appendChild(style)
}

class Gcss {
  constructor (config) {
    setConfig(config || {})
  }

  start () {
    genCss()
    window.onload = function () {
      document.addEventListener('DOMNodeInserted', genCss)
    }
  }
}

window.Gcss = Gcss