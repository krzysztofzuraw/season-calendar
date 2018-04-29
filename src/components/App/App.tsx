import * as React from 'react';
import 'typeface-lato';
import 'typeface-playfair-display';
import { style } from 'typestyle';

import { Month } from '../../models';

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

interface State {
  months: Month[];
  selectedMonth: number;
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      months: [
        { id: 1, name: 'January', foods: [{ name: 'Apple' }] },
        { id: 2, name: 'February', foods: [{ name: 'Banana' }] },
        { id: 3, name: 'March', foods: [{ name: 'Banana' }] },
        { id: 4, name: 'April', foods: [{ name: 'Banana' }] },
        { id: 5, name: 'May', foods: [{ name: 'Banana' }] },
        { id: 6, name: 'June', foods: [{ name: 'Banana' }] },
        { id: 7, name: 'July', foods: [{ name: 'Banana' }] },
        { id: 8, name: 'August', foods: [{ name: 'Banana' }] },
        { id: 9, name: 'September', foods: [{ name: 'Banana' }] },
        { id: 10, name: 'October', foods: [{ name: 'Banana' }] },
        { id: 11, name: 'November', foods: [{ name: 'Banana' }] },
        { id: 12, name: 'December', foods: [{ name: 'Orange' }] }
      ],
      selectedMonth: 1
    };

    this.handleGoToPrevMonth = this.handleGoToPrevMonth.bind(this);
    this.handleGoToNextMonth = this.handleGoToNextMonth.bind(this);
  }

  public selectCurrentMonth(state: State) {
    return (
      this.state.months.find(month => month.id === this.state.selectedMonth) ||
      this.state.months[0]
    );
  }

  public handleGoToPrevMonth() {
    this.setState({
      selectedMonth:
        this.state.selectedMonth === 1 ? 12 : this.state.selectedMonth - 1
    });
  }

  public handleGoToNextMonth() {
    this.setState({
      selectedMonth:
        this.state.selectedMonth === 12 ? 1 : this.state.selectedMonth + 1
    });
  }

  public render() {
    const currentMonth = this.selectCurrentMonth(this.state);
    return (
      <div className={root}>
        <Header title={currentMonth.name} />
        <div>
          <div className={text}>What to buy in Poland</div>
          <GroceriesList foods={currentMonth.foods} />
        </div>
        <Footer
          activeMonth={currentMonth.id}
          handleLeftArrowClick={this.handleGoToPrevMonth}
          handleRightArrowClick={this.handleGoToNextMonth}
        />
      </div>
    );
  }
}

export default App;
