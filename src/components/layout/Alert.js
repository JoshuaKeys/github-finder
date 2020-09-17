import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fa fa-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};
