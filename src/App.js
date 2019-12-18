import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Page/Header';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami  from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak'
import Footer from './Page/Footer';

function App() {
  return (
    <div>
      <Header/>
      <hr/>
      <br/><br/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  );
}

export default App;
