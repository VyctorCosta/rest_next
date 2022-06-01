import React from "react";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Body from "../src/components/Body";
import { AuthProvider } from "../src/providers/auth";

function HomePage() {
  return (
    <AuthProvider>
      <Header />
      <Search />
      <Body />
    </AuthProvider>
  );
}

export default HomePage;
