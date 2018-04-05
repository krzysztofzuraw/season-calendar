import * as React from 'react';
import 'typeface-lato';
import 'typeface-playfair-display';
import { style } from 'typestyle';

import GroceriesList from '../GroceriesList/GroceriesList';
import MonthHeader from '../MonthHeader/MonthHeader';

const root = style({
  fontSize: '16px',
  padding: 30
});

const text = style({
  color: '#606F7B',
  fontFamily: 'Lato',
  fontSize: '1.125em',
  lineHeight: '22px'
});

class App extends React.Component {
  public render() {
    return (
      <div className={root}>
        <MonthHeader />
        <div className={text}>What to buy in Poland</div>
        <GroceriesList />
      </div>
    );
  }
}

export default App;
