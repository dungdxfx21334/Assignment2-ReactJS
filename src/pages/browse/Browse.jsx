import React from 'react';
import Navbar from './navbar/Navbar';
import LoremIpsum from 'react-lorem-ipsum';
import classes from './Browse.module.css';

function Browse() {
  return (
    <div className={classes.browse}>
      <Navbar></Navbar>
      <LoremIpsum p={100}></LoremIpsum>
    </div>
  );
}

export default Browse;
