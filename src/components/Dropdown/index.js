import React, { useState } from 'react';
import classNames from 'classnames';

import { DropdownList } from '../DropdownList';

export const Dropdown = ({ name, icon, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleHendler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classNames('dropdown-wrapper', { open: isOpen })}>
      <button className='btn' onClick={onToggleHendler}>
        <span>{name}</span>
        <i className='material-icons'>{icon}</i>
      </button>

      <DropdownList items={items} />
    </div>
  );
};
