// import React from 'react';
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import AppRouter from "./providers/router/ui/AppRouter";

const App = () => {
  return (
      <div className={'app'}>
          <Navbar/>
          <AppRouter/>
          <Footer/>
      </div>
  );
};

export default App;