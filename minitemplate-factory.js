const mt = require('./minitemplate.js')

module.exports = {
  compile: mt.compiler(mt.templater, mt.mustacheTemplate),
  plugin: (template) => {
    if (typeof template !== 'function') {
      throw new TypeError('Error: template has to be a function that returns a string.')
    }
    return mt.compiler(mt.templater,template)
  }
}
