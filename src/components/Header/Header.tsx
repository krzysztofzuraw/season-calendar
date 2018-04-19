import * as React from 'react';
import { style } from 'typestyle';

const root = style({
  color: '#22292F',
  fontFamily: 'Playfair Display',
  fontSize: '2.25em',
  gridArea: 'header',
  lineHeight: '48px',
  paddingBottom: '17px'
});

const Header = () => {
  return <div className={root}>April</div>;
};

export default Header;
