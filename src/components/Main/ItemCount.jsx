import React, { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const { prueba } = props;

    const sumar = () => {
        count < props.stock && setCount(count + 1);
    };

    const restar = () => {
        count > props.initial && setCount(count - 1);
    };

    const add = () => {
        prueba(count);
    };

    return (
        <div className="container">
            <div className="countDiv">
                <button disabled={count === props.stock} 
                className='btn btn-primary' 
                onClick={sumar}>
                    +
                </button>
                <button disabled='true' className='btn btn-primary'>
                 {count}
                  </button>
                <button disabled={count === props.initial} 
                className='btn btn-primary'
                onClick={restar}>
                    -
                </button>
            </div>
            <button onClick={add} className='btn btn-success'>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
