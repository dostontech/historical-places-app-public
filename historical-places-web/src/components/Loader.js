import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Loader = ({ loading }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <ClipLoader color="#3498db" loading={loading} size={50} />
    </div>
  );
};

export default Loader;
