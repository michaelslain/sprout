const Keywords = require('./keywords.js')

exports.default = {
    operatorPairs: {
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
    },
    operatorEntries: Object.entries(operatorPairs),
    operatorKeys: Object.keys(operatorPairs),
    operatorValues: Object.values(operatorPairs),
    getOperatorType: operatorValue =>
        operatorEntries.find(entry => operatorValue === entry[1])[0],
}
