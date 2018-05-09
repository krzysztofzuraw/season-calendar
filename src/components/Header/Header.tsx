import * as React from 'react';
import { style } from 'typestyle';

const root = style({
  color: '#22292F',
  fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, 
  sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  fontSize: '2.25em',
  gridArea: 'header',
  lineHeight: '48px',
  paddingBottom: '17px'
});

const Header = ({ title }: { title: string }) => {
  return <div className={root}>{title}</div>;
};

export default Header;
