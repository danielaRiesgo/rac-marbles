import Cycle from 'cyclejs';
import diagramModel from 'rac-marbles/components/diagram/diagram-model';
import diagramView from 'rac-marbles/components/diagram/diagram-view';
import diagramIntent from 'rac-marbles/components/diagram/diagram-intent';

function DiagramComponent(interactions, properties) {
  let intent = diagramIntent(interactions);
  let model = diagramModel(properties, intent);
  let view = diagramView(model);

  return {
    vtree$: view.vtree$,
    newdata$: model.newData$
  };
}

module.exports = DiagramComponent;
