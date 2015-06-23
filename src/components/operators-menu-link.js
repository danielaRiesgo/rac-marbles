import Cycle from 'cyclejs';
import Colors from 'rac-marbles/styles/colors';
import Dimens from 'rac-marbles/styles/dimens';
import {mergeStyles} from 'rac-marbles/styles/utils';
let Rx = Cycle.Rx;
let h = Cycle.h;

function operatorsMenuLink(interactions, properties) {
  let startHighlight$ = interactions.get('.link', 'mouseenter').map(() => 1);
  let stopHighlight$ = interactions.get('.link', 'mouseleave').map(() => 1);
  let href$ = properties.get('href');
  let content$ = properties.get('content').startWith('');
  let isHighlighted$ = Rx.Observable.merge(
    startHighlight$.map(() => true),
    stopHighlight$.map(() => false)
  ).startWith(false);
  let highlightingArrow = h('span', {
      style: {
        display: 'inline-block',
        position: 'absolute',
        right: Dimens.spaceTiny}
    }, '\u276F'
  );
  let vtree$ = Rx.Observable.combineLatest(href$, content$, isHighlighted$,
    (href, content, isHighlighted) =>
      h('a.link', {
          style: mergeStyles({
              position: 'relative',
              display: 'block',
              color: Colors.greyDark},
            isHighlighted ? {color: Colors.black} : null),
          href: href},
        [
          content,
          isHighlighted ? highlightingArrow : null
        ]
      )
  );

  return {vtree$};
}

module.exports = operatorsMenuLink;
