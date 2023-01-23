import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function TrendingIcon({
  width = 20,
  height = 20,
  color = '#EC537E',
  ...props
}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <Path
        d="m8.112 1.66 2.06 4.173 4.607.674-3.333 3.246.787 4.587-4.12-2.167-4.12 2.167.786-4.587-3.333-3.246 4.606-.674 2.06-4.173Z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
