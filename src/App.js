import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import './App.css';
import HomePage from './pages/HomePage'


function App () {
 return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
 );
};

export default App;
