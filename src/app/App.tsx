// import React from 'react';
import Footer from "../widgets/footer/Footer";
import Navbar from "../widgets/navbar/Navbar";
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
