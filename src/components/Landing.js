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
        <div className={classNames('landing-link')} onClick={props.toggleModal}>
          intro
        </div>
        <div className={classNames('landing-slash')}>
          /
        </div>
        <div className={classNames('landing-link')} onClick={props.toggleModal}>
          experience
        </div>
        <div className={classNames('landing-slash')}>
          /
        </div>
        <div className={classNames('landing-link')} onClick={props.toggleModal}>
          contact
        </div>
      </div>
      <div className={classNames('landing-links')}>
        <a href="https://github.com/zachbai">
          <img className={classNames('landing-link', 'icon')} src="../../assets/github.png"/>
        </a>
        <a href="https://linkedin.com/in/zachbai">
          <img className={classNames('landing-link', 'icon')} src="../../assets/linkedin.png"/>
        </a>
      </div>
    </div>
  )
};

export default Landing;
