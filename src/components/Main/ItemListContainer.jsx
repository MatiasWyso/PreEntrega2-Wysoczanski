import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import PropagateLoader from 'react-spinners/PropagateLoader'


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryName } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'productos');

        const referencia = categoryName
            ? query(collectionProd, where('category', '==', categoryName))
            : collectionProd;
        //const q = query(collectionProd, where('category', '==', categoryName));

        getDocs(referencia)
            .then((res) => {
                //console.log(res.docs);
                //.data()
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);

    if (loading) {
        return (
            <div
                style={{
                    minHeight: '80vh',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <PropagateLoader style={{ marginTop: '100px' }} color="black" />
            </div>
        );
    }

    return (
        <main>
            <div className="item-list-container">
                <ItemList items={items} />
            </div>
        </main>
    );
};

export default ItemListContainer;