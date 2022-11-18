import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


// Main Page
const Home = React.lazy(() => import('../src/screens/Home'));

// 404 Page
const NotFound = React.lazy(() => import('../src/screens/NotFound'));


export default function Navigation() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
          exact
        />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
