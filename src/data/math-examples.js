var Rx = require('cyclejs').Rx;

module.exports = {
  "reduce": {
    "label": "reduce((x, y) => x + y)",
    "inputs": [
      [{t:5, d:1}, {t:15, d:2}, {t:25, d:3}, {t:35, d:4}, {t:65, d:5}, 80]
    ],
    "apply": function(inputs) {
      return inputs[0].reduce((x, y) =>
        y.set('content', x.get('content') + y.get('content'))
         .set('id', x.get('id') + y.get('id'))
      );
    }
  },
};
