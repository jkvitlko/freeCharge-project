import React, { useEffect, useState } from 'react';
import RecipeCard from './components/recipeCard';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import OtpPage from './components/OtpPage';
import home from './images/recipeBgImg.jpg';
import Header from './components/Header';

function App() {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch('http://starlord.hackerearth.com/recipe')
      .then(response => response.json())
      .then(data => {
        setRecipeData(data)
      })
  }, []);

  return (
    <Router>
      <div className="recipe">
        <div className="">
          <Switch>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/otp">
              <OtpPage />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/">
              <Header />
              <div className="bg-img">
                <div className="recieps">
                  {recipeData.map((recipe, index) =>
                    <div className="recipe-list" key={index}>
                      <RecipeCard recipeData={recipe} />
                    </div>
                  )}
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
