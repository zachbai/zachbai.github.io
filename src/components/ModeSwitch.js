import React, { Component } from 'react';

const classNames = require('classnames');

const ModeSwitch = (props) => {
  const fa = props.className == 'modal-next'
    ? 'fa fa-angle-right'
    : 'fa fa-angle-left';

  const switchDirection = props.className == 'modal-next'
    ? 'next'
    : 'prev';

  return (
    <div className={classNames('modeswitch-container', switchDirection)}
      onClick={props.switchMode}>
      <i className={classNames(fa, 'modeswitch-icon')}></i>
    </div>
  )
}

export default ModeSwitch;
