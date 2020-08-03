import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './assets/styles/App.scss';
import Name from './components/name/Name';
const App = () => {
  return (
    <div id="fullpage">
      <div className="section">
        <Header />
          <Name />
        <Footer />
      </div>
    </div>
  );
};
export default App;
