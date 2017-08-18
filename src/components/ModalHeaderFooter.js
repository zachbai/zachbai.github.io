import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

ModalHeaderFooter.propTypes = {
    headerText: PropTypes.string.isRequired,
    imageSrc: PropTypes.string
};

function ModalHeaderFooter(props) {
  return (
    <div className={classNames('modal-header-container')}>
      <div className={classNames('modal-header-text')}>
        { props.headerText }
      </div>
      {
        props.imageSrc != null
        ? <img className={classNames('me-image')} src={props.imageSrc}/>
        : null
      }
    </div>
  );
}

export default ModalHeaderFooter;
