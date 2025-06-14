import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface WorkoutIconProps {
  color: string;
  size: number;
  focused: boolean;
}

const WorkoutIcon: React.FC<WorkoutIconProps> = ({ color, size, focused }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d={focused
        ? "M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5M12 3v18M3 12h18"
        : "M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5M12 3v18M3 12h18"
      }
      stroke={color}
      strokeWidth={focused ? 2.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default WorkoutIcon; 