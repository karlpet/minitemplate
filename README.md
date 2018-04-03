# minitemplate
A minimal templating engine for node and javascript.

### Getting started:
```bash
npm install && npm test
```

### Example:
```javascript
const templater = require('./minitemplate.js');

const string = '<p>{{name}} is {{adjective}}!</p>'
const stringTemplate = templater(string)

const templatedString = stringTemplate({ name: 'node', adjective: 'nice' })

// templatedString === '<p>node is nice!</p>'
```

Uses no dependencies apart from jest for testing.

## MIT license
