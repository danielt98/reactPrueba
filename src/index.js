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
  //uri: 'http://127.0.0.1:8000/api/graphql',
  uri: 'https://backend-authql.herokuapp.com/api/graphql',
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