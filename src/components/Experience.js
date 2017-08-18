import React,  { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Experience(props) {
  return (
      <div className={classNames('experience-container')}>
        <div className={classNames('experience-header')}>
          <div className={classNames('experience-header-text')}>
            {props.header}
          </div>
          <div className={classNames('experience-header-text', 'sub')}>
            {props.subheader}
          </div>
        </div>
        <div className={classNames('experience-description')}>
          {props.description}
        </div>
      </div>
  );
}

export default Experience;
