import Cycle from 'cyclejs';
import Colors from 'rac-marbles/styles/colors';
import Dimens from 'rac-marbles/styles/dimens';
import Fonts from 'rac-marbles/styles/fonts';
import {mergeStyles} from 'rac-marbles/styles/utils';
let Rx = Cycle.Rx;
let h = Cycle.h;

const pageRowWidth = '1060px';
const sandboxWidth = '820px';

const pageRowStyle = {
  position: 'relative',
  width: pageRowWidth,
  margin: '0 auto'
};

const pageRowChildStyle = {
  display: 'inline-block',
  marginLeft: `-${Dimens.spaceMedium}`
};

const pageRowFirstChildStyle = mergeStyles(pageRowChildStyle, {
  width: `calc(${pageRowWidth} - ${sandboxWidth} - ${Dimens.spaceMedium})`,
  marginRight: Dimens.spaceMedium
});

const pageRowLastChildStyle = mergeStyles(pageRowChildStyle, {
  width: sandboxWidth
});

function vrenderHeader() {
  return h('div', {style: pageRowStyle}, [
    h('h1',
      {style: mergeStyles({
        fontFamily: Fonts.fontSpecial,
        color: Colors.greyDark},
        pageRowFirstChildStyle)},
      'RAC Marbles'),
    h('h3',
      {style: mergeStyles({
        color: Colors.greyDark},
        pageRowLastChildStyle)},
      'Interactive diagrams for ReactiveCocoa')
  ]);
}

function vrenderContent(route) {
  return h('div',
    {style: mergeStyles(pageRowStyle, {marginTop: Dimens.spaceSmall})},
    [
      h('div',
        {style: pageRowFirstChildStyle},
        h('x-operators-menu', {key: 'operatorsMenu'})
      ),
      h('div',
        {style: mergeStyles({
          position: 'absolute',
          top: '0'},
          pageRowLastChildStyle)}
        ,h('x-sandbox', {key: 'sandbox', route: route, width: '820px'})
      )
    ]
  );
}

function vrenderFooter() {
  return h('section', {
    style: {
      position: 'fixed',
      bottom: '2px',
      right: Dimens.spaceMedium,
      color: Colors.greyDark
    }
  }, [
    'Shameless fork of ',
    h('a', {href: 'http://rxmarbles.com'}, 'RxMarbles'),
    ' by ',
    h('a', {href: 'https://twitter.com/andrestaltz'}, '@andrestaltz')
  ]);
}

module.exports = function appView(model) {
  return Rx.Observable.combineLatest(
    model.route$,
    (route, appVersion, rxVersion) =>
      h('div', [
        vrenderHeader(),
        vrenderContent(route),
        vrenderFooter()
      ])
  )
};
