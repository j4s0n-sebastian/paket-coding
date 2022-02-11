import React from 'react';
import Info from './components/Info';
import Counter from './components/Counter';
import Image from './components/Image';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div className="app-wrapper">
        <Info nama="Jason Sebastian" kelas="XE" isMorning={true}/>
        <Counter />
        <Image />
      </div>
    );
  }
}

export default App;