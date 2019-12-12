import React, { Component } from 'react';
import {
	Link
} from "react-router-dom";
import Header from '../Component/Header'
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default Stats;