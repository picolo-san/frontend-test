import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MODAL_STATUS } from "types";

import { Home } from "pages/Home";
import { Header, Footer } from "components/layout";

import { appStyles, mainStyles } from "./styles";
import { twMerge } from "tailwind-merge";

const App = () => {
  return (
    <div className={twMerge(`App`, appStyles)}>
      <Header />
      <main className={twMerge(mainStyles)}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
};

export default App;
