import * as React from 'react';
import 'typeface-lato';
import 'typeface-playfair-display';
import { style } from 'typestyle';

import Footer from '../Footer/Footer';
import GroceriesList from '../GroceriesList/GroceriesList';
import Header from '../Header/Header';

const root = style({
  display: 'grid',
  fontSize: '16px',
  gridTemplateAreas: '"header" "main" "footer"',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'auto 1fr auto',
  height: '100%',
  padding: 30,
  width: '100%'
});

const text = style({
  color: '#606F7B',
  fontFamily: 'Lato',
  fontSize: '1.125em',
  gridArea: 'main',
  lineHeight: '22px',
  paddingBottom: '5px'
});

class App extends React.Component {
  public render() {
    return (
      <div className={root}>
        <Header />
        <div>
          <div className={text}>What to buy in Poland</div>
          <GroceriesList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
