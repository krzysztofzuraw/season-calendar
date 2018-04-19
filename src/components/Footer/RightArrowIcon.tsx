// tslint:disable: max-line-length
import * as React from 'react';
import { style } from 'typestyle';

const root = style({
  marginRight: '16px'
});

const RightArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={16}
      height={16}
      className={root}
      fill="rgba(0, 0, 0, 0.11)"
    >
      <path d="m10 7h-8v6h8v5l8-8-8-8z" />
    </svg>
  );
};

export default RightArrowIcon;
