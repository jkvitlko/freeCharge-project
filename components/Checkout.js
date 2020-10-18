import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';
import { useStateValue } from '../StateProvider';

function Checkout() {

    const [{ cart }, dispatch] = useStateValue()
    console.log(cart);
    return (
        <div className="">
            <div className="checkout-center checkout">
                <h3 className="heading-3">Credit card checkout</h3>
                <label>Cardholder's Name</label>
                <input type="text" name="name" />
                <label>Card Number</label>
                <input type="number" name="card_number" />
                <label>Expiration Date</label>
                <input type="month" name="exp_date" />
                <label>CVV</label>
                <input type="number" name="cvv" />
                <Link to="/otp" ><button>Pay ${cart[0].price}
                </button> </Link>
            </div>
        </div>
    );
}

export default Checkout;