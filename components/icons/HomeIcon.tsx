import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HomeIconProps {
  color: string;
  size: number;
  focused: boolean;
}

const HomeIcon: React.FC<HomeIconProps> = ({ color, size, focused }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d={focused 
        ? "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        : "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
      }
      stroke={color}
      strokeWidth={focused ? 0 : 2}
      fill={focused ? color : "none"}
    />
  </Svg>
);

export default HomeIcon; 