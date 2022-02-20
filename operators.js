const Keywords = require('./keywords.js')

const operatorPairs = {
    and: Keywords.AND_OPERATOR,
    or: Keywords.OR_OPERATOR,
    equal: Keywords.EQUAL_OPERATOR,
    lessthan: Keywords.LESS_THAN_OPERATOR,
    lessthanequal: Keywords.LESS_THAN_EQUAL_OPERATOR,
    greaterthan: Keywords.GREATER_THAN_OPERATOR,
    greaterthanequal: Keywords.GREATER_THAN_EQUAL_OPERATOR,
    add: Keywords.ADDITION_OPERATOR,
    subtract: Keywords.SUBTRACTION_OPERATOR,
    multiply: Keywords.MULTIPLICATION_OPERATOR,
    divide: Keywords.DIVISION_OPERATOR,
}

const operatorEntries = Object.entries(operatorPairs)

const operatorKeys = Object.keys(operatorPairs)

const operatorValues = Object.values(operatorPairs)

const getOperatorType = operatorValue =>
    operatorEntries.find(entry => operatorValue === entry[1])[0]

module.exports = {
    operatorPairs,
    operatorEntries,
    operatorKeys,
    operatorValues,
    getOperatorType,
}
