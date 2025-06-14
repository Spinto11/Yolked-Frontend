import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ProfileIconProps {
  color: string;
  size: number;
  focused: boolean;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ color, size, focused }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d={focused
        ? "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100 8 4 4 0 000-8z"
        : "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 7a4 4 0 100 8 4 4 0 000-8z"
      }
      stroke={color}
      strokeWidth={focused ? 2.5 : 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ProfileIcon; 