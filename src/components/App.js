import React, { Component } from 'react';
import Landing from './Landing.js';
import IntroModal from './IntroModal.js';
import ExperienceModal from './ExperienceModal.js';
import ContactModal from './ContactModal.js';

const classNames = require('classnames');

const MODAL_MODES = {
  INTRO: 'intro',
  EXPERIENCE: 'experience',
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

  toggleModal(mode) {
    this.setState({
      modalOn: !this.state.modalOn,
      modalMode: mode
    });
  }

  introClicked() {
    this.toggleModal(MODAL_MODES.INTRO);
  }

  experienceClicked() {
    this.toggleModal(MODAL_MODES.EXPERIENCE);
  }

  contactClicked() {
    this.toggleModal(MODAL_MODES.CONTACT);
  }

  renderModal(mode) {
    switch (mode) {
      case MODAL_MODES.INTRO:
        return <IntroModal />;
        break;
      case MODAL_MODES.EXPERIENCE:
        return <ExperienceModal />;
        break;
      case MODAL_MODES.CONTACT:
        return <ContactModal />;
        break;
      default:
        console.error("Invalid mode");
        return null;
        break;
    }
  }

  render() {
    return (
      <div className={classNames('app-container')}>
        {
          this.state.modalOn
          ? this.renderModal(this.state.modalMode)
          : null
        }
        <Landing
          modalOn={this.state.modalOn}
          toggleModal={this.toggleModal.bind(this)}
          introClicked={this.introClicked.bind(this)}
          experienceClicked={this.experienceClicked.bind(this)}
          contactClicked={this.contactClicked.bind(this)}
          />
      </div>
    );
  }
}
