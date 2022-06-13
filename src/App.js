import React from 'react';

import { Dropdown } from './components/Dropdown';

import { items } from './data';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Dropdown name='Account Settings' icon='public' items={items} />
      </div>
    </div>
  );
}

export default App;
