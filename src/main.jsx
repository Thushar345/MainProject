// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Signup from './signup.jsx'; 
import Signin from './signin.jsx'; 
import Reset from './reset.jsx'; 
import TryUsPage from './TryUsPage.jsx';
import Header from './Header.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from './About.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<Reset />} /> 
          <Route path="/try-us" element={<TryUsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
