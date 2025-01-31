import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashBoard from '../pages/dashBoard/Dashboard';
import NotFound from '../pages/NotFound';
import Post from '../pages/posts/Index';
import Signin from '../pages/auth/Signin';
import { useSelector } from 'react-redux';


const ROUTES = () => {
  
  return (
    <Routes>

      <Route path="/" element={<DashBoard />} />
      <Route path="/posts">
        <Route index element={<Post />} />
      </Route>

      <Route path="/signin" element={<Signin />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default ROUTES;
