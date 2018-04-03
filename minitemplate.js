const templater = template => string => {
  if (typeof string !== 'string') {
    throw new TypeError('Error: argument is not string.')
  }

  return template(string)
}

const template = (string) => (data) => {
  if (!!data && typeof data !== 'object') {
    throw new TypeError('Error: argument is not object')
  }

  let templatedString = string;

  data = data || {};
  Object.entries(data).forEach((keyVal) => {
    let key = keyVal[0];
    let val = keyVal[1];

    var regexp = new RegExp('{{'+key+'}}')
    templatedString = templatedString.replace(regexp,val)
  })

  return templatedString
}

if (typeof module === "undefined") { module = {}; }
module.exports = templater(template)
