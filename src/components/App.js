import React, { Component } from 'react';
import Landing from './Landing.js';
import IntroModal from './IntroModal.js';
import WorkModal from './WorkModal.js';
import ContactModal from './ContactModal.js';
import { MODAL_MODES } from './constants.js';

const classNames = require('classnames');

const MODES = [MODAL_MODES.INTRO, MODAL_MODES.WORK, MODAL_MODES.CONTACT];

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeModeIndex: null
    };
  }

  closeModal() {
    this.setState({
        activeModeIndex: null
    });
  }

  switchModes(mode) {
    this.setState({
      activeModeIndex: MODES.indexOf(mode)
    });
  }

  nextMode() {
    const newIndex = this.state.activeModeIndex + 1;
    this.setState({
      activeModeIndex: newIndex
    });
  }


  prevMode() {
    const newIndex = this.state.activeModeIndex - 1;
    this.setState({
      activeModeIndex: newIndex
    });
  }

  getActiveMode() {
    if (this.state.activeModeIndex == null) {
      return null;
    }
    return MODES[this.state.activeModeIndex];
  }

  renderModals(mode) {
    return (
      <div className={classNames('modals-container', this.getActiveMode())}>
        <IntroModal nextMode={this.nextMode.bind(this)}
          closeModal={this.closeModal.bind(this)}/>
        <WorkModal nextMode={this.nextMode.bind(this)}
          prevMode={this.prevMode.bind(this)}
          closeModal={this.closeModal.bind(this)}/>
        <ContactModal
          prevMode={this.prevMode.bind(this)}
          closeModal={this.closeModal.bind(this)}/>
      </div>
    );
  }

  render() {
    return (
      <div className={classNames('app-container')}>
        <div className={classNames('modals-indicator-bar', this.getActiveMode() != null ? 'on': null)}>
          <div className={classNames('modals-indicator', this.getActiveMode())}>
          </div>
        </div>
        <Landing
          onClickedLink={this.switchModes.bind(this)}
          />
        { this.renderModals(this.getActiveMode()) }
      </div>
    );
  }
}
