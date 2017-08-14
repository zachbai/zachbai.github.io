import React, { Component } from 'react';
import Landing from './Landing.js';
import Modal from './Modal.js';

const classNames = require('classnames');

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOn: false
    };
  }

  toggleModal() {
    this.setState({
      modalOn: !this.state.modalOn
    });
  }

  render() {
    return (
      <div className={classNames('app-container')}>
        {
          this.state.modalOn
          ? <Modal
              toggleModal={this.toggleModal.bind(this)}
              inFocus={this.state.modalOn}/>
          : null
        }
        <Landing
          modalOn={this.state.modalOn}
          toggleModal={this.toggleModal.bind(this)}/>
      </div>
    );
  }
}
