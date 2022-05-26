import React from 'react';
import './Home.css';
import GoldCompany from './GoldCompany';
import GoldStyle from './GoldStyle';
import NewStyle from './NewStyle';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PriceChart from './PriceChart';
import Nav from './Nav/nav';
// import Chart from './Chart'

const Home = () => {
  return (
    <div className='Home'>
      {/* <Nav /> */}
      <div className='chart'>{/* <PriceChart /> */}</div>
      <br />
      <div style={{ display: 'flex' }}>
        <div className='GoldCompany' style={{ display: 'flex' }}>
          <GoldCompany />
        </div>
        <div className='GoldStyle' style={{ display: 'flex' }}>
          <GoldStyle />
        </div>
      </div>
      <div className='NewStyle'>
     
      <Link to='/NewStyle' >
      <img src="1.png" alt='...' />
      <h1>new style</h1>
        {/* <NewStyle /> */}
        </Link>
      </div>
    </div>
  );
};

export default Home;
