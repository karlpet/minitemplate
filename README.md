# minitemplate
A minimal templating engine for node and browser javascript.

### Getting started:
```bash
npm install && npm test
```

### Basic Example:
```javascript
const Templater = require('./minitemplate-factory.js');

const string = '<p>{{name}} is {{adjective}}!</p>'
const stringTemplate = Templater.compile(string)

const templatedString = stringTemplate({ name: 'node', adjective: 'nice' })

// templatedString === '<p>node is nice!</p>'
```

You can also easily plugin your own templating functions, like this:
```javascript
const Templater = require('./minitemplate-factory.js');

const newTemplate = (key) => '<<'+key+'>>'
Templater.plugin(newTemplate)

const string = '<p><<name>> is <<adjective>>!</p>'
const stringTemplate = Templater.compile(string)

const templatedString = stringTemplate({ name: 'node', adjective: 'nice' })

// templatedString === '<p>node is nice!</p>'

Templater.reset() // Now the template is back to normal {{key}}, AKA 'mustache template'.

```

Uses no dependencies apart from jest for testing.

## MIT license
