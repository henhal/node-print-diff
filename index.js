
var inline = require('./lib/inline');
var unified = require('./lib/unified');

function printDiff(actual, expected, out) {
  unified.apply(this, arguments);
}

printDiff.inline = inline;
printDiff.unified = unified;

module.exports = printDiff;
