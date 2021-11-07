import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://delivery-food-backend.herokuapp.com/graphql/',
  cache: new InMemoryCache(),

});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </ApolloProvider>,
  document.getElementById('root')
);