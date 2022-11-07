import { BsCart } from "react-icons/bs";
import React, {useContext} from 'react';
import {cartContext} from '../../Context/cartContext';

const CartWidget = () => {
  const{totalUnidades} = useContext (cartContext)
    return (
        <div className="widget-container"> <BsCart></BsCart>
            <span>{totalUnidades()}</span>
        </div>

    );
};

export default CartWidget;
