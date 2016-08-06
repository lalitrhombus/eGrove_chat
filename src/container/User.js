import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';


export default class User extends React.Component {
  state={
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Online User List</h1>
        </div>
      </div>
    );
  }
}
