import * as React from 'react';
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
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, 
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
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
        { foods: [
          { name: 'Marchew' },
          {name: 'Orzechy włoskie'},
          {name: 'Cebula'},
          {name: 'Czosnek'} 
        ], 
          id: 1, 
          name: 'Styczeń', 
        },
        { id: 2, name: 'Luty', foods: [{ name: 'Banana' }] },
        { id: 3, name: 'Marzec', foods: [{ name: 'Banana' }] },
        { id: 4, name: 'Kwiecień', foods: [{ name: 'Banana' }] },
        {
          foods: [
            {name: 'Truskawki'},
            {name: 'Agrest'},
            {name: 'Gruszki'},
            {name: 'Jabłka'},
            {name: 'Groszek cukrowy'},
            {name: 'Fasola'},
            {name: 'Orzechy laskowe'},
            {name: 'Orzechy włoskie'},
            {name: 'Marchew'},
            {name: 'Czosnek'},
            {name: 'Cebula'},
            {name: 'Pomidor'},
            {name: 'Rzodkiewka'},
            {name: 'Ogórek'},
            {name: 'Burak cwikłowy'}
          ],
          id: 5,
          name: 'Maj'
        },
        { id: 6, name: 'Czerwiec', foods: [{ name: 'Banana' }] },
        { id: 7, name: 'Lipiec', foods: [{ name: 'Banana' }] },
        { id: 8, name: 'Sierpień', foods: [{ name: 'Banana' }] },
        { id: 9, name: 'Wrzesień', foods: [{ name: 'Banana' }] },
        { id: 10, name: 'Pazdziernik', foods: [{ name: 'Banana' }] },
        { id: 11, name: 'Listopad', foods: [{ name: 'Banana' }] },
        { id: 12, name: 'Grudzień', foods: [{ name: 'Orange' }] }
      ],
      selectedMonth: new Date().getMonth() + 1
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
          <div className={text}>Co kupić w Polsce</div>
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
