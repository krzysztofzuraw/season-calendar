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

const Header = ({ title }: { title: string }) => {
  return <div className={root}>{title}</div>;
};

export default Header;
