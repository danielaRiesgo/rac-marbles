var Rx = require('cyclejs').Rx;

module.exports = {
  "delay": {
    "label": "delay(20)",
    "inputs": [
      [{t:0, d:1}, {t:10, d:2}, {t:20, d:1}]
    ],
    "apply": function(inputs, scheduler) {
      return inputs[0].delay(20, scheduler);
    }
  },

  "map": {
    "label": "map { x in x * 10 }",
    "inputs": [
      [{t:10, d:1}, {t:20, d:2}, {t:50, d:3}]
    ],
    "apply": function(inputs) {
      return inputs[0].map(x => x.set('content', x.get('content') * 10));
    }
  },
};
