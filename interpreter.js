const format = require('./format.js')
const tokenize = require('./tokenize.js')
const lex = require('./lex.js')
const parse = require('./parse.js')

module.exports = (rawCode, messenger) => {
    parse(lex(tokenize(format(rawCode)), messenger), messenger)
    messenger('Done.')
}
