import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../mock/productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const traerProducto = () => {
      return new Promise((res, rej) => {
        const producto = products.find((prod) => prod.id === id);

        setTimeout(() => {
          res(producto);
        }, 2000);
      });
    };
    traerProducto()
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  console.log(item);

  return (
    <main>
      <div className='item-list-container'>
        <ItemDetail item={item} />
      </div>
    </main>
  );
};

export default ItemDetailContainer;
