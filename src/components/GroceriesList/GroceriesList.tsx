import * as React from 'react';
import { style } from 'typestyle';

import { Food } from '../../models';

import ShoppingCartIcon from './ShoppingCartIcon';

const root = style({
  '-webkit-padding-start': 0,
  color: '#8795A1',
  fontFamily: 'Lato',
  fontSize: '1em',
  gridArea: 'main',
  listStyle: 'none'
});

const item = style({
  lineHeight: '19px',
  paddingBottom: '16px'
});

const GroceriesList = ({ foods }: { foods: Food[] }) => {
  return (
    <ul className={root}>
      {foods.map((food, id) => (
        <li className={item} key={`${food}${id}`}>
          <ShoppingCartIcon />
          {food.name}
        </li>
      ))}
    </ul>
  );
};

export default GroceriesList;
