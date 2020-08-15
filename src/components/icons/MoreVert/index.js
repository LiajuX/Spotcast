import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const MoreVertIcon = ({ ...props }) => {
  return (
    <Svg
      style={{ width: 20, height: 20 }}
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M10 6.66668C10.9167 6.66668 11.6667 5.91668 11.6667 5.00001C11.6667 4.08334 10.9167 3.33334 10 3.33334C9.08334 3.33334 8.33334 4.08334 8.33334 5.00001C8.33334 5.91668 9.08334 6.66668 10 6.66668ZM10 8.33334C9.08334 8.33334 8.33334 9.08334 8.33334 10C8.33334 10.9167 9.08334 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08334 10.9167 8.33334 10 8.33334ZM10 13.3333C9.08334 13.3333 8.33334 14.0833 8.33334 15C8.33334 15.9167 9.08334 16.6667 10 16.6667C10.9167 16.6667 11.6667 15.9167 11.6667 15C11.6667 14.0833 10.9167 13.3333 10 13.3333Z" fill="white"/>
    </Svg>
  );
}