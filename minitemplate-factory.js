const mt = require('./minitemplate.js')

module.exports = (() => {
  let state = {}

  state.compile = mt.compiler(mt.templater, mt.mustacheTemplate) 
  
  state.plugin = (template) => {
    if (typeof template !== 'function') {
      throw new TypeError('Error: template has to be a function that returns a string.')
    }
    state.compile = mt.compiler(mt.templater, template)
  }

  state.reset = () => {
    state.compile = mt.compiler(mt.templater, mt.mustacheTemplate)
  }
  return state;
})()
