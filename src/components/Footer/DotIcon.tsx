import * as React from 'react';
import { style } from 'typestyle';

const root = style({
  marginLeft: '5px',
  marginRight: '5px'
});

interface SFCProps {
  active?: boolean;
}

const DotIcon: React.SFC<SFCProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6 6"
      width={6}
      height={6}
      className={root}
      fill="rgba(0, 0, 0, 0.11)"
    >
      <circle cx="3" cy="3" fill={props.active ? '#219653' : '#c4c4c4'} r="3" />
    </svg>
  );
};

export default DotIcon;
