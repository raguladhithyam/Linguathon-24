import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import NavMenu from './NavMenu';
import Footer from './Footer';

const Container = (props: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  const { children } = props;

  return (
    <div className="overflow-hidden">
      <NavMenu />
      <main className="">
        {loading ? <LoadingSpinner /> : children}
      </main>
      <Footer />
    </div>
  );
};

export default Container;
