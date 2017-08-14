import React,  { Component } from 'react';
const classNames = require('classnames');

const IntroModal = (props) => {
  return (
    <div className={classNames('modal-container')}>
      <div className={classNames('modal-header-text')}>
        intro
      </div>
    </div>
  );
};

export default IntroModal;
