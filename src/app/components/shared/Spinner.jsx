import React from 'react';
import { DotLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='my-20 flex justify-center'>
      <DotLoader color='#F54A00' />
    </div>
  );
};

export default Spinner;