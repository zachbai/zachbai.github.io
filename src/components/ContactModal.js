import React,  { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import ModeSwitch from './ModeSwitch.js';
import ModalHeaderFooter from './ModalHeaderFooter.js';

ContactModal.propTypes = {
  activeMode: PropTypes.string,
  prevMode: PropTypes.func.isRequired,
};

function ContactModal(props) {
  return (
    <div className={classNames('modal-container', 'isContact', props.activeMode)}>
     <ModeSwitch className='modal-prev' switchMode={props.prevMode}/>
     <div className={classNames('modal-content-container')}>
        <ModalHeaderFooter headerText='contact'/>
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
