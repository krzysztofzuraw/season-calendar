// tslint:disable: max-line-length
import * as React from 'react';
import { style } from 'typestyle';

const root = style({
  marginRight: '16px'
});

const LeftArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={16}
      height={16}
      className={root}
      fill="rgba(0, 0, 0, 0.11)"
    >
      <path d="M10 13h8V7h-8V2l-8 8 8 8v-5z" />
    </svg>
  );
};

export default LeftArrowIcon;
