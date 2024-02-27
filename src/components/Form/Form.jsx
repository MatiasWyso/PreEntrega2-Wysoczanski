import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { useState, useContext, useRef } from 'react';
import { cartContext } from '../../Context/cartContext'
import {db} from '../../services/firebaseConfig'

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false)
    const {cart, precioTotal, deleteAll} = useContext(cartContext)
    const alertMessage = useRef()
    const totalPrice = precioTotal()
    


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        if (email === emailConfirm) {
            const order = {
                buyer: {name, lastName}, 
                items: cart, 
                precioTotal: totalPrice, 
                date: serverTimestamp(), 
            }

            alertMessage.current.classList.add("alert");
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order)
            .then((res) => {
                setOrderId(res.id)
                deleteAll()
            })
            
            .catch ((error) => {
                console.log(error)
            })
            .finally(() => setLoading(false))
        }
         else {  alertMessage.current.classList.remove("alert")
        setLoading(false) }
        
       };


       const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChangeEmail = (e) => {
         setEmail(e.target.value)
    }
    const handleChangeEmailConfirm = (e) => {
        setEmailConfirm(e.target.value)
   }


   if (orderId) {
    return ( <h1 style={{minHeight:"75vh"}}> Gracias por su compra, su numero de seguimiento es {orderId}</h1>)
   }

    return (
        <div 
            style={{
                minHeight: '75vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }} className="form-box"
        >
            <form onSubmit={handleSubmit} action="" className="form-buy">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                 <input
                    type="text"
                    name="correo"
                    placeholder="Correo electronico"
                    onChange={handleChangeEmail}
                    value={email}
                />
                 <input
                    type="text"
                    name="correo"
                    placeholder="Confirmar correo"
                    onChange={handleChangeEmailConfirm}
                    value={emailConfirm}
                />
               
                 <small className="alert" ref= {alertMessage} > El email tiene que coincidir </small>


                
                <button onClick={handleSubmit}> {loading ? 'Enviando' : ' Enviar'} </button>
            </form>
        </div>
    );
};

export default Form;