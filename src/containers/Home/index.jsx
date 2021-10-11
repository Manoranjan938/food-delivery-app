import React, { useEffect, useState } from 'react';
import Header from 'components/Home/Header/Header';
import Hero from 'components/Home/Hero/Hero';
import About from 'components/Home/AboutUs/About';
import Loader from 'components/LoaderScreen/loader';

const Home = () => {
  const [loader, setLoader] = useState(false);

  setTimeout(function delay() {
    setLoader(true);
  }, 2000);

  return (
    <>
      {loader ? (
        <>
        <Header />
        <Hero />
        <About />
      </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
