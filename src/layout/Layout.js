import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Navbar";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
