import React from 'react';

import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Category from './Category';
import Header from './Header';
import Questions from './Questions';
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Route path="/quiz/:id"  component={Questions} />
        <Route path="/" exact>
          <Category />
        </Route>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;