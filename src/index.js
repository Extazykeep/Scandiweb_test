import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, ProductPage, CartPage, ProductSingle, client } from './components/imports'

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/product/:id" component = {ProductSingle} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="/" component={ProductPage} />
        </Switch>
      </div>
    </ApolloProvider>
  </Router>,
  document.getElementById('root')
)
