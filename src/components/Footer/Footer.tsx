import * as React from 'react';
import { style } from 'typestyle';

import DotIcon from './DotIcon';
import LeftArrowIcon from './LeftArrowIcon';
import RightArrowIcon from './RightArrowIcon';

const root = style({
  display: 'flex',
  gridArea: 'footer',
  justifyContent: 'space-between'
});
const monthsIndicator = style({
  alignItems: 'center',
  display: 'flex'
});

const Footer = () => {
  return (
    <div className={root}>
      <LeftArrowIcon />
      <div className={monthsIndicator}>
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon active={true} />
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon />
        <DotIcon />
      </div>
      <RightArrowIcon />
    </div>
  );
};

export default Footer;
