import React,  { Component } from 'react';
const classNames = require('classnames');

const Experience = (props) => {
  return (
      <div className={classNames('experience-container')}>
        <div className={classNames('experience-header')}>
          <div className={classNames('experience-header-text')}>
            {props.header}
          </div>
        </div>
        <div className={classNames('experience-header-text', 'sub')}>
          {props.subheader}
        </div>
        <div className={classNames('experience-description')}>
          {props.description}
        </div>
      </div>
  );
}

export default Experience;
