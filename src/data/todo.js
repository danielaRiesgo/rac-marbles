var Rx = require('cyclejs').Rx;

module.exports = {
    // Signals
    "mapError": { "label": "mapError" },
    "ignoreNil": { "label": "ignoreNil" },
    "collect": { "label": "collect" },
    "observeOn": { "label": "observeOn" },
    "materialize": { "label": "materialize" },
    "dematerialize": { "label": "dematerialize" },
    "scan": { "label": "scan" },
    "sampleOn": { "label": "sampleOn" },
    "combinePrevious": { "label": "combinePrevious" },
    "skipRepeats": { "label": "skipRepeats" },
    "skipWhile": { "label": "skipWhile" },
    "takeUntilReplacement": { "label": "takeUntilReplacement" },
    "takeWhile": { "label": "takeWhile" },
    "try": { "label": "try" },
    "tryMap": { "label": "tryMap" },
    "throttle": { "label": "throttle" },
    "timeoutWithError": { "label": "timeoutWithError" },
    "promoteErrors": { "label": "promoteErrors" },

    // Producers

    // Uncategorized
    "timer": { "label": "timer" },
    "on": { "label": "on" },
    "startOn": { "label": "startOn" },
    "times": { "label": "times" },
    "then": { "label": "then" },

    // Error recovery
    "catch": { "label": "catch" },
    "retry": { "label": "retry" },

    // Blocking operators
    "first": { "label": "first" },
    "last": { "label": "last" },
    "single": { "label": "single" },
    "wait": { "label": "wait" },

    // Flattening operators
    "latest": { "label": "flatten(.Latest)" },
    "flatMap": { "label": "flatMap" }
}

