import React from 'react';
import { GridLoader } from 'react-spinners';
import { useRouter } from 'next/router';

const LoadingSpinner = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <GridLoader color="#36d7b7" />
    </div>
  );
};

export default LoadingSpinner;
