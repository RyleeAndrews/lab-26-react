import { say } from 'cowsay';
import React from 'react';
import ReactDom from 'react-dom';

import '../src/style/main.scss';

class App extends React.component {

  constructor(props){
    super(props);

    this.generateRandomIpsum = this.generateRandomIpsum.bind(this);

    this.state = {
      content: faker.word(),
    };
  }

  generateRandomIpsum(){
    let content = faker.word();
    this.setState({content});
  }
  render(){
    return (
      <div>
        <header>
          <div className="content">{this.state.content}</div>
          <h1> Generate Cowsay Lorem </h1>
          <button onClick={this.generateRandomIpsum}></button>
        </header>
      </div>
    );
  }
}
ReactDom.render(<App/>, document.getElementById('root'));
