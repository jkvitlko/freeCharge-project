import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './recipeCard.css'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

export default function RecipeCard({ recipeData }) {

  const [{ cart }, dispatch] = useStateValue()
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: recipeData.id,
                name: recipeData.name,
                price: recipeData.price,
            }
        })
    }

  return (
    <div className="row">
      <div className="container">
        <div className="card">
          <div className="card-body recipe-card">
            <Link to="/checkout">
              <div>
                <img src={recipeData.image} className="img-fluid w-50 mx-auto rounded-circle" onClick={addToCart}/>
              </div>
            </Link>
            <h5 className="recipe-name">
              {recipeData.name}
            </h5>
            <h6 className="recipe-name">
              {recipeData.description}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}
