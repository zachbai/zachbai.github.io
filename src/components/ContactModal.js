import React,  { Component } from 'react';
import ModeSwitch from './ModeSwitch.js';
const classNames = require('classnames');

const ContactModal = (props) => {
  return (
    <div className={classNames('modal-container')}>
    <i className={classNames('fa fa-times', 'modal-close')}></i>
     <ModeSwitch className='modal-prev' switchMode={props.prevMode}/>
     <div className={classNames('modal-content-container')}>
        <div className={classNames('modal-header-container')}>
          <div className={classNames('modal-header-text')}>
            contact
          </div>
        </div>
        <div className={classNames('modal-body-container')}>
          <p className={classNames('modal-body-text')}>
            Drop me a line!
          </p>
          <p className={classNames('modal-body-text')}>
            email: zachrybai(at)gmail(dot)com
          </p>
          <p className={classNames('modal-body-text')}>
            phone: (917) 929-3292
          </p>
          <p className={classNames('modal-body-text')}>
            address: 115 Eliot Mail Center, Cambridge MA
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
