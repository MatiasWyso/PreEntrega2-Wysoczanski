import { Container } from "react-bootstrap";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/cartContext';
import ItemCount from './ItemCount';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsCart } from "react-icons/bs";


const ItemDetail = ({ item }) => {
    const [unidades, setUnidades] = useState(0);

    const { addToCart } = useContext(cartContext);

    const prueba = (numero) => {
        setUnidades(numero);
        addToCart(item, numero);
        toast.success(`Agregaste ${numero} unidades`);
    };

    return (
      <Container>
        <div className="container-detail">
        <ToastContainer />
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                {item.description}
                </p>

                {unidades === 0 ? (
                    <ItemCount prueba={prueba} stock={item.stock} initial={1} />
                ) : ( 
                    <Link to="/cart"  style= {{color: "blue", fontWeight: "500", textDecoration: "none", padding: "7px", border: "2px solid blue", borderRadius: "10px"}
                }>Ir al carrito<BsCart></BsCart></Link>
                )}
            </div>
        </div>
        </Container>
    );
};

export default ItemDetail;