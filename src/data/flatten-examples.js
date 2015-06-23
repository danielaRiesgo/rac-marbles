var Rx = require('cyclejs').Rx;

module.exports = {
  "concat": {
    "label": "flatten(.Concat)",
    "inputs": [
      [{t:0, d:1}, {t:15, d:1}, {t:50, d:1}, 57],
      [{t:0, d:2}, {t:8, d:2}, 12]
    ],
    "apply": function(inputs) {
      return Rx.Observable.concat(inputs);
    }
  },

  "merge": {
    "label": "flatten(.Merge)",
    "inputs": [
      [{t:0, d:20}, {t:15, d:40}, {t:30, d:60}, {t:45, d:80}, {t:60, d:100}],
      [{t:37, d:1}, {t:68, d:1}]
    ],
    "apply": function(inputs) {
      return Rx.Observable.merge(inputs);
    }
  },
};
