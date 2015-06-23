var Cycle = require('cyclejs');
var appModel = require('rac-marbles/app-model');
var appView = require('rac-marbles/app-view');
var operatorsMenuLinkComponent = require('rac-marbles/components/operators-menu-link');
var operatorsMenuComponent = require('rac-marbles/components/operators-menu');
var sandboxComponent = require('rac-marbles/components/sandbox/sandbox');
var diagramComponent = require('rac-marbles/components/diagram/diagram');
var marbleComponent = require('rac-marbles/components/marble');
var diagramCompletionComponent = require('rac-marbles/components/diagram-completion');

Cycle.registerCustomElement('x-operators-menu-link', operatorsMenuLinkComponent);
Cycle.registerCustomElement('x-operators-menu', operatorsMenuComponent);
Cycle.registerCustomElement('x-sandbox', sandboxComponent);
Cycle.registerCustomElement('x-marble', marbleComponent);
Cycle.registerCustomElement('x-diagram-completion', diagramCompletionComponent);
Cycle.registerCustomElement('x-diagram', diagramComponent);

Cycle.applyToDOM('.js-appContainer', function app() {
  return appView(appModel());
});
