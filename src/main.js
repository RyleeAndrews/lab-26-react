'use strict';
import '../src/style/main.scss';


import { say } from 'cowsay-browser';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';


class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>
        <h1> Generate Lorem Ipsum </h1>
      </header>

    );
  }
}
class App extends React.Component {

  constructor(props){
    super(props);

    this.generateRandomIpsum = this.generateRandomIpsum.bind(this);

    this.state = {
      content: 'Lorem paragraph',
    };
  }

  generateRandomIpsum(){
    let content = faker.fake('{{lorem.paragraphs}}');
    this.setState({content});
  }
  render(){
    return (
      <div>
        <Header />
        <pre>
          {say({text: this.state.content})}
        </pre>
        <button onClick={this.generateRandomIpsum}>Click Me!</button>
      </div>
    );
  }
}
ReactDom.render(<App/>, document.getElementById('root'));
