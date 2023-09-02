import React from 'react';
import Navbar from './navbar/Navbar';
import classes from './Browse.module.css';
import Banner from './banner/Banner';
import ApiContextProvider from '../../context/ApiContextProvider';

function Browse() {
  return (
    <ApiContextProvider>
      <div className={classes.browse}>
        <Navbar></Navbar>
        <Banner></Banner>
      </div>
    </ApiContextProvider>
  );
}

export default Browse;
