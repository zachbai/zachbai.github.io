import React, { Component } from 'react';
import Landing from './Landing.js';
import IntroModal from './IntroModal.js';
import WorkModal from './WorkModal.js';
import ContactModal from './ContactModal.js';

const classNames = require('classnames');

const MODAL_MODES = {
  INTRO: 'intro',
  WORK: 'work',
  CONTACT: 'contact'
};

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOn: false,
      modalMode: MODAL_MODES.INTRO
    };
  }

  toggleModal() {
    this.setState({
      modalOn: !this.state.modalOn
    });
  }

  switchModes(mode) {
    this.setState({
      modalMode: mode
    });

    if (!this.state.modalOn) {
        this.toggleModal();
    }
  }

  introClicked() {
    this.switchModes(MODAL_MODES.INTRO);
  }

  workClicked() {
    this.switchModes(MODAL_MODES.WORK);
  }

  contactClicked() {
    this.switchModes(MODAL_MODES.CONTACT);
  }

  renderModals(mode) {
    return (
      <div className={classNames('modals-container', this.state.modalMode,
          this.state.modalOn ? 'on' : null)}
          onClick={this.toggleModal.bind(this)}>
        <IntroModal />,
        <WorkModal />,
        <ContactModal />
      </div>
    );
  }

  render() {
    return (
      <div className={classNames('app-container')}>
        <div className={classNames('modals-indicator-bar', this.state.modalOn ? 'on': null)}>
          <div className={classNames('modals-indicator',
            this.state.modalOn ? 'on' : null, this.state.modalMode)}>
          </div>
        </div>
        <Landing
          introClicked={this.introClicked.bind(this)}
          workClicked={this.workClicked.bind(this)}
          contactClicked={this.contactClicked.bind(this)}
          />
        { this.renderModals(this.state.modalMode) }
      </div>
    );
  }
}
