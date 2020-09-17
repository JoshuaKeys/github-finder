import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import alertContext from '../../context/alert/AlertContext';

export const Alert = () => {
  const { alert } = useContext(alertContext);
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
