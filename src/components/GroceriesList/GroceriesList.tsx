import * as React from 'react';
import { style } from 'typestyle';

import ShoppingCartIcon from './ShoppingCartIcon';

const root = style({
  '-webkit-padding-start': 0,
  color: '#8795A1',
  fontFamily: 'Lato',
  fontSize: '1em',
  listStyle: 'none',
});

const item = style({
  lineHeight: '19px',
  paddingBottom: '16px'
});

const GroceriesList = () => {
  return (
    <ul className={root}>
      <li className={item}>
        <ShoppingCartIcon />Carrot
      </li>
      <li className={item}>
        <ShoppingCartIcon />Brocolli
      </li>
    </ul>
  );
};

export default GroceriesList;
