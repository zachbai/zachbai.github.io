import React, { Component } from 'react';
const classNames = require('classnames');

const Landing = (props) => {

  return (
    <div className={classNames('landing-container',
        props.modalOn ? 'on' : null)}
        onClick={props.modalOn ? props.toggleModal : null}>
      <div className={classNames('landing-header-text')}>
        Zachry Bai
      </div>
      <div className={classNames('landing-links')}>
        <div className={classNames('landing-link')} onClick={props.introClicked}>
          intro
        </div>
        <div className={classNames('landing-slash')}>
          /
        </div>
        <div className={classNames('landing-link')} onClick={props.workClicked}>
          work
        </div>
        <div className={classNames('landing-slash')}>
          /
        </div>
        <div className={classNames('landing-link')} onClick={props.contactClicked}>
          contact
        </div>
      </div>
      <div className={classNames('landing-links')}>
        <a href="https://github.com/zachbai" target="_blank">
          <i className={classNames('fa fa-github', 'landing-icon', 'icon')}></i>
        </a>
        <a href="https://linkedin.com/in/zachbai" target="_blank">
          <i className={classNames('fa fa-linkedin', 'landing-icon', 'icon')}></i>
        </a>
      </div>
    </div>
  )
};

export default Landing;
