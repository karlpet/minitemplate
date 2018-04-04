'use strict'
if (typeof module === "undefined") { var module = {}; }

module.exports.compiler = (templater, template) => string => {
  if (typeof string !== 'string') {
    throw new TypeError('Error: argument is not string.')
  }

  return templater(string, template)
}

module.exports.templater = (string, template) => (data) => {
  if (!!data && typeof data !== 'object') {
    throw new TypeError('Error: argument is not object')
  }

  let templatedString = string;

  data = data || {};
  Object.entries(data).forEach((keyVal) => {
    let key = keyVal[0];
    let val = keyVal[1];
    var regexp = new RegExp(template(key))
    templatedString = templatedString.replace(regexp,val)
  })

  return templatedString
}

module.exports.mustacheTemplate = (key) => '{{'+key+'}}'
