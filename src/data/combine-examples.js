var Rx = require('cyclejs').Rx;

module.exports = {
  "combineLatest": {
    "label": "combineLatest",
    "inputs": [
      [{t:0, d:1}, {t:20, d:2}, {t:65, d:3}, {t:75, d:4}, {t:92, d:5}],
      [{t:10, d:"A"}, {t:25, d:"B"}, {t:50, d:"C"}, {t:57, d:"D"}]
    ],
    "apply": function(inputs) {
      return Rx.Observable.combineLatest(inputs[0], inputs[1],
        (x, y) => (x.get('content') + "," + y.get('content'))
      );
    }
  },

  "sampleOn": {
    "label": "sampleOn",
    "inputs": [
      [{t:0, d:1}, {t:20, d:2}, {t:40, d:3}, {t:60, d:4}, {t:80, d:5}],
      [{t:10, d:"-"}, {t:25, d:"-"}, {t:33, d:"-"}, {t:70, d:"-"}, 90]
    ],
    "apply": function(inputs) {
      return inputs[0].sample(inputs[1]);
    }
  },

  "zip": {
    "label": "zip",
    "inputs": [
      [{t:0, d:1}, {t:20, d:2}, {t:65, d:3}, {t:75, d:4}, {t:92, d:5}],
      [{t:10, d:"A"}, {t:25, d:"B"}, {t:50, d:"C"}, {t:57, d:"D"}]
    ],
    "apply": function(inputs) {
      return Rx.Observable.zip(inputs[0], inputs[1],
        (x, y) => (x.get('content') + "," + y.get('content'))
      );
    }
  }
};
