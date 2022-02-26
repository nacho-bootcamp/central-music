import React from "react";
//import ReactDom from "react-dom";
//import app from "app";
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';


ReactDOM.render(
    <ChakraProvider>
        <App/> 
    </ChakraProvider>, document.getElementById("root")
) ;

