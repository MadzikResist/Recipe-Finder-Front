import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login';
import { createGlobalStyle } from 'styled-components';
import Loading from './components/loading/Loading';

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const Account = lazy(() => import('./components/account/Account'));
const Register = lazy(() => import('./components/register/Register'));
const SearchRecipe = lazy(() => import('./components/searchRecipe/SearchRecipe'));
const Recipe = lazy(() => import('./components/recipe/Recipe'));
const CalculatorBmi = lazy(() => import('./components/calculator/CalculatorBMI'));

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 14px;
      height: 14px;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(13deg, #72ac31 14%, #f9b613 64%);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(13deg, #F9B613 14%, #72ac31 64%);
    }

    ::-webkit-scrollbar-track {
      background: #141414;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/search-recipe">
              <SearchRecipe />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/recipe/:id">
              <Recipe />
            </Route>
            <Route exact path="/calculator">
              <CalculatorBmi />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
