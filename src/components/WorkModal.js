import React,  { Component } from 'react';
import Experience from './Experience.js';
const classNames = require('classnames');

const WorkModal = (props) => {
  return (
    <div className={classNames('modal-container', 'experience')}>
      <div className={classNames('modal-header-container')}>
        <div className={classNames('modal-header-text')}>
          experience
        </div>
      </div>
      <div className={classNames('modal-body-container')}>
        <Experience
          header="Software Developer Intern"
          subheader="IMC Financial Markets"
          description="Some description"
          image="../../assets/imc.png"/>
        <Experience
          header="iOS Developer Intern"
          subheader="Samsung Accelerator"
          description="Some description"
          image="../../assets/samsungacceleratorlogo.png"/>
      </div>
      <div style={{height: "80px"}}>
      </div>
      <div className={classNames('modal-header-container')}>
        <div className={classNames('modal-header-text')}>
          projects
        </div>
      </div>
      <div className={classNames('modal-body-container')}>
        <Experience
          header="Software Developer Intern"
          subheader="IMC Financial Markets"
          description="Some description"
          image="../../assets/imc.png"/>
        <Experience
          header="iOS Developer Intern"
          subheader="Samsung Accelerator"
          description="Some description"
          image="../../assets/samsungacceleratorlogo.png"/>
      </div>
    </div>
  );
};

export default WorkModal;
