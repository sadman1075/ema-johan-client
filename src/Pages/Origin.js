import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const Origin = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

    </div>
  );
};

export default Origin;