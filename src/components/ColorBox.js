import React, { Component } from 'react';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
    }

    shouldComponentUpdate() {
      console.log('shouldComponentUpdate');
      return true
    }

    componentDidMount() {
      console.log('componentDidMount');
    }

    componentDidUpdate() {
      console.log('componentDidUpdate');
    }

    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    render() {
        console.log('Render');
        const { color } = this.props;
        return (
          <div className="color-box" style={{ backgroundColor: color, width: '100px', height: '100px' }}>
            {color}
          </div>
        );
    }
}

export default ColorBox;
