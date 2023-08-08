import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

//Components
import Header from "../components/header";
import Footer from "../components/footer";

//Pages
import Home from "../pages/home";
import Housing from "../pages/housing";
import About from "../pages/about";
import Error from "../pages/error";

const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Router = () => {
  return (
    <BrowserRouter>
      <StyledPageContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </StyledPageContainer>
    </BrowserRouter>
  );
};

export default Router;
