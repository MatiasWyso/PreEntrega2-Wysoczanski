import { useContext } from 'react';
import { cartContext } from '../../Context/cartContext';
import { AiFillDelete} from 'react-icons/ai';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, deleteAll, deleteOne, precioTotal } = useContext(cartContext);
    const total = precioTotal();


    if (cart.length === 0) {
        return <h1 style={{minHeight:"75vh"}}>Sin productos</h1>;
        }

    return (
        <div className="cart-container">
            {cart.map((prod) => (
                <div className="cart-detail" key={prod.id}>
                    <img src={prod.img} alt={prod.title} width="80px" />
                    <div className="cart-detail-info">
                        <h2>{prod.title}</h2>
                        <h3>Cantidad: {prod.cantidad}</h3>
                        <h3>Precio: ${prod.price}.-</h3>
                        <h4>Subtotal: ${prod.price * prod.cantidad}.-</h4>
                    </div>

                    <AiFillDelete 
                        size={30}
                        color="red"
                        onClick={() => deleteOne(prod.id)}
                    />
                </div>
            ))}
            <div className="container-buy">
            <h2>Total: ${total}</h2>
            <button onClick={deleteAll} style={{ backgroundColor: "red",borderRadius: "6px", border:"none",color: "black",padding: "5px",width: "80px"}}><AiFillDelete size="30"/></button>
            <Link to='/checkout' style={{ borderRadius: "6px",backgroundColor: "green", color: "black",fontSize:"18px", padding: "10px",width: "80px"}}>Finalizar</Link> </div>
        </div>
    );
};

export default Cart;