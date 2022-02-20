const Keywords = require('./keywords.js')

exports.operatorPairs = {
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

exports.operatorEntries = Object.entries(operatorPairs)

exports.operatorKeys = Object.keys(operatorPairs)

exports.operatorValues = Object.values(operatorPairs)

exports.getOperatorType = operatorValue =>
    operatorEntries.find(entry => operatorValue === entry[1])[0]
