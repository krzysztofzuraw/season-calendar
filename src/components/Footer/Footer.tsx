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

const Footer = ({
  activeMonth,
  handleLeftArrowClick,
  handleRightArrowClick
}: {
  activeMonth: number;
  handleLeftArrowClick: () => void;
  handleRightArrowClick: () => void;
}) => {
  return (
    <div className={root}>
      <LeftArrowIcon handleClick={handleLeftArrowClick} />
      <div className={monthsIndicator}>
        <DotIcon active={activeMonth === 1 ? true : false} />
        <DotIcon active={activeMonth === 2 ? true : false} />
        <DotIcon active={activeMonth === 3 ? true : false} />
        <DotIcon active={activeMonth === 4 ? true : false} />
        <DotIcon active={activeMonth === 5 ? true : false} />
        <DotIcon active={activeMonth === 6 ? true : false} />
        <DotIcon active={activeMonth === 7 ? true : false} />
        <DotIcon active={activeMonth === 8 ? true : false} />
        <DotIcon active={activeMonth === 9 ? true : false} />
        <DotIcon active={activeMonth === 10 ? true : false} />
        <DotIcon active={activeMonth === 11 ? true : false} />
        <DotIcon active={activeMonth === 12 ? true : false} />
      </div>
      <RightArrowIcon handleClick={handleRightArrowClick} />
    </div>
  );
};

export default Footer;
