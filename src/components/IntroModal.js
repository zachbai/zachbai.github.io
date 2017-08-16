import React,  { Component } from 'react';
import ModeSwitch from './ModeSwitch.js';
const classNames = require('classnames');

const IntroModal = (props) => {
  return (
    <div className={classNames('modal-container')}>
      <div className={classNames('modal-content-container')}>
        <div className={classNames('modal-header-container')}>
          <div className={classNames('modal-header-text')}>
            intro
          </div>
          <img className={classNames('me-image')} src={'../../assets/me.png'}/>
        </div>
        <div className={classNames('modal-body-container')}>
          <p className={classNames('modal-body-text')}>
            Hey, I'm Zach.
          </p>

          <p className={classNames('modal-body-text')}>
            I’m currently a Senior at Harvard University studying
            Computer Science. I’ve done coursework in topics ranging
            from CS and math to film and design.
          </p>

          <p className={classNames('modal-body-text')}>
            I have a passion for creating and building things—
            music and software, in particular.  You can find the source code for
            this site, as well as some of my other projects at github.com/zachbai.
          </p>

          <p className={classNames('modal-body-text')}>
            If you’d like to get in touch, don’t hesitate to send me an email at
            zachrybai(at)gmail(dot)com.
          </p>
        </div>
        <div className={classNames('modal-footer-container')}>
          <a className={classNames('modal-link', 'download')} href="../../assets/resume.pdf" download>
            resume
            <i className={classNames('fa fa-download', 'download-icon')}>
            </i>
          </a>
          <div>
            <a href="https://github.com/zachbai" target="_blank">
              <i className={classNames('fa fa-github', 'modal-link', 'icon')}></i>
            </a>
            <a href="https://linkedin.com/in/zachbai" target="_blank">
              <i className={classNames('fa fa-linkedin', 'modal-link', 'icon')}></i>
            </a>
          </div>
        </div>
      </div>
     <ModeSwitch className='modal-next' switchMode={props.nextMode}/>
    </div>
  );
};

export default IntroModal;
