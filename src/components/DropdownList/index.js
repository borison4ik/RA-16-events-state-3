import React from 'react';

import { DropdownItem } from '../DropdownItem';

export const DropdownList = ({ items }) => {
  return (
    <ul data-id='dropdown' className='dropdown'>
      {items.map((item) => (
        <DropdownItem {...item} />
      ))}
    </ul>
  );
};
