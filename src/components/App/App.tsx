import * as React from 'react';
import 'typeface-playfair-display';
import { style } from 'typestyle';

import MonthHeader from '../MonthHeader/MonthHeader';

const root = style({
  padding: 30
});

class App extends React.Component {
  public render() {
    return (
      <div className={root}>
        <MonthHeader />
      </div>
    );
  }
}

export default App;
