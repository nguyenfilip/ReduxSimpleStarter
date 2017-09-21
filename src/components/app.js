import React, { Component } from 'react';
import Child from './child'

export default class App extends Component {
    constructor(props) {
      super(props)
        console.log('constructor')
        this.state = {text:'aaa'};
        this.x = true;
    }

    componentDidMount() {
        console.log("App did mount")

    }

    render() {
        console.log("App rendering")


        return (
          <div>

              {this.x && React.createElement(Child, null)}

              <div>{this.state.text}</div>
              <button onClick={(e)=> {
                        this.x = !this.x;
                        console.log(e)
                          this.setState({text:'ffff'});
                      }}>
                Set State
              </button>
          </div>
        );
    }
}
