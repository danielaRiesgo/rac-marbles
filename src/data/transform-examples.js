var Rx = require('cyclejs').Rx;

module.exports = {
  "delay": {
    "label": "delay",
    "inputs": [
      [{t:0, d:1}, {t:10, d:2}, {t:20, d:1}]
    ],
    "apply": function(inputs, scheduler) {
      return inputs[0].delay(20, scheduler);
    }
  },

  "map": {
    "label": "map(x => 10 * x)",
    "inputs": [
      [{t:10, d:1}, {t:20, d:2}, {t:50, d:3}]
    ],
    "apply": function(inputs) {
      return inputs[0].map(x => x.set('content', x.get('content') * 10));
    }
  },

  "scan": {
    "label": "scan((x, y) => x + y)",
    "inputs": [
      [{t:5, d:1}, {t:15, d:2}, {t:25, d:3}, {t:35, d:4}, {t:65, d:5}]
    ],
    "apply": function(inputs) {
      return inputs[0].scan((x, y) => 
        y.set('content', x.get('content') + y.get('content'))
         .set('id', x.get('id') + y.get('id'))
      );
    }
  },
};
