import React from 'react';
import './App.css';
import emojiList from './data/emojiList.json';
import Header from './components/Header';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        {emojiList[10].title}
      </div>
    );
  }
}

export default App;
