import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = () => {
  return (
    <div className="text-center">
      <Spinner animation="border" role="status" variant="light">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinnerComponent;