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

export interface Food {
  name: string;
}
interface State {
  months: Array<{ id: number; food: Food[]; name: string }>;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      months: [{ id: 1, name: 'January', food: [{ name: 'Apple' }] }]
    };
  }

  public selectCurrentMonth(state: State) {
    return state.months[0];
  }

  public render() {
    const currentMonth = this.selectCurrentMonth(this.state);
    return (
      <div className={root}>
        <Header title={currentMonth.name} />
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
