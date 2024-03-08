import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
    domain="dev-z0fsfoqvmjbus5sh.us.auth0.com"
    clientId="G18QNC1uFxnkY0yliH6qfvLvmYiLi17s"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Auth0Provider>
);

