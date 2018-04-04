const Templater = require('./minitemplate-factory.js')
const compile = Templater.compile;

describe('Templater.compile', () => {

  it('compile fails if not string', () => {
    expect(() => { compile(2) }).toThrowError(TypeError)
    expect(() => { compile({}) }).toThrowError(TypeError)
    expect(() => { compile(() => {}) }).toThrowError(TypeError)
  })

  it('compile templates empty string', () => {

    let strTemplate = compile('')
    let str = strTemplate();
    expect(str).toBe('')
  })

  it('compiler templates string with no variables', () => {

    let strTemplate = compile('<div>Hello</div>');
    let str = strTemplate();
    expect(str).toBe('<div>Hello</div>')
  })

  it('compiler templates string with variables', () => {

    let strTemplate = compile('<h1>{{name}}</h1>')
    let str = strTemplate({ name: 'karlpet' })
    expect(str).toBe('<h1>karlpet</h1>')
  })

  it('compiler templates string with many variables', () => {

    let strTemplate = compile('<p>Hello {{person}}! There are {{number}} tests written for {{project}}.</p>')
    let str = strTemplate({ person: 'testman', number: 5, project: 'compile' })
    expect(str).toBe('<p>Hello testman! There are 5 tests written for compile.</p>')

    str = strTemplate({ person: 'testman2', number: 1337, project: 'templater' })
    expect(str).toBe('<p>Hello testman2! There are 1337 tests written for templater.</p>')
  })

  it('templating fails if templating data is not object', () => {
    let strTemplate = compile('<p>Hello testman!</p>')

    expect(() => { strTemplate('string') }).toThrowError(TypeError)
    expect(() => { strTemplate(2324) }).toThrowError(TypeError)
    expect(() => { strTemplate(() => {}) }).toThrowError(TypeError)
  })
})

describe('Templater.plugin', () => {

  const mockTemplate = (key) => '<<'+key+'>>'
  const newCompile = Templater.plugin(mockTemplate)

  it('Fails if template is not a function', () => {
    expect(() => { Templater.plugin(4) }).toThrowError(TypeError)
    expect(() => { Templater.plugin('') }).toThrowError(TypeError)
    expect(() => { Templater.plugin({}) }).toThrowError(TypeError)
  })

  it('compiles and templates a string with many variables', () => {
    let strTemplate = newCompile('<h1><<greeting>>, <<name>>!</h1>')
    let str = strTemplate({ greeting: 'Hello', name: 'testman' })

    expect(str).toBe('<h1>Hello, testman!</h1>')
  })

})
