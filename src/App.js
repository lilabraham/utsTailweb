import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const ProductList = lazy(() => import('./ProductList'));
const Profile = lazy(() => import('./Profile'));
const Login = lazy(() => import('./Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
