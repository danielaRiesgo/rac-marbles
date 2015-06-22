var Rx = require('cyclejs').Rx;

module.exports = {
  "filter": {
    "label": "filter(x => x > 10)",
    "inputs": [
      [{t:5, d:2}, {t:15, d:30}, {t:25, d:22}, {t:35, d:5}, {t:45, d:60}, {t:55, d:1}]
    ],
    "apply": function(inputs) {
      return inputs[0].filter(x => (x.get('content') > 10));
    }
  },

  "first": {
    "label": "first",
    "inputs": [
      [{t:30, d:1}, {t:40, d:2}, {t:65, d:3}, {t:75, d:4}, 85]
    ],
    "apply": function(inputs) {
      return inputs[0].first();
    }
  },

  "skip": {
    "label": "skip(2)",
    "inputs": [
      [{t:30, d:1}, {t:40, d:2}, {t:65, d:3}, {t:75, d:4}]
    ],
    "apply": function(inputs) {
      return inputs[0].skip(2);
    }
  },

  "take": {
    "label": "take(2)",
    "inputs": [
      [{t:30, d:1}, {t:40, d:2}, {t:65, d:3}, {t:75, d:4}, 85]
    ],
    "apply": function(inputs, scheduler) {
      return inputs[0].take(2, scheduler);
    }
  },

  "takeLast": {
    "label": "takeLast(1)",
    "inputs": [
      [{t:30, d:1}, {t:40, d:2}, {t:65, d:3}, {t:75, d:4}, 85]
    ],
    "apply": function(inputs) {
      return inputs[0].takeLast(1);
    }
  },

  "takeUntil": {
    "label": "takeUntil",
    "inputs": [
      [{t:0, d:1}, {t:10, d:2}, {t:20, d:3}, {t:30, d:4}, {t:40, d:5}, {t:50, d:6}, {t:60, d:7}, {t:70, d:8}, {t:80, d:9}],
      [{t:45, d:0}, {t:73, d:0}]
    ],
    "apply": function(inputs) {
      return inputs[0].takeUntil(inputs[1]);
    }
  }
};
