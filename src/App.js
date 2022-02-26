import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ChakraProvider } from "@chakra-ui/provider";

const App = () => {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
};

export default App;
