import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function MessageIcon({
  width = 20,
  height = 20,
  color,
  ...props
}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        d="M17.5 9.583a6.983 6.983 0 0 1-.75 3.167 7.084 7.084 0 0 1-6.333 3.917 6.983 6.983 0 0 1-3.167-.75L2.5 17.5l1.583-4.75a6.983 6.983 0 0 1-.75-3.167A7.083 7.083 0 0 1 7.25 3.25a6.983 6.983 0 0 1 3.167-.75h.416A7.066 7.066 0 0 1 17.5 9.167v.416Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
