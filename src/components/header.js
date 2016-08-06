import React from 'react';
import { Link } from 'react-router';

export default class header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
      <div className="logo">
        <img src="https://www.egrovesys.com/wp-content/uploads/2014/04/egrovelogo.png" alt=""/>
      </div>
    </header>
    );
  }
}
