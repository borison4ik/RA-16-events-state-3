import React from 'react';

const liStyle = {
  color: '#5380f7',
};
export const DropdownItem = ({ active, text }) => {
  return (
    <li style={active && liStyle}>
      <a href='#'>{text}</a>
    </li>
  );
};
