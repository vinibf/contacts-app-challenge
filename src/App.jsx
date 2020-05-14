import React from 'react';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts>
          <Contact />
        </Contacts>
      </React.Fragment>
    )
  }
}

export default App;
