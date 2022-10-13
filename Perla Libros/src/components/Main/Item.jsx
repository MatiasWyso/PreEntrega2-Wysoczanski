import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <>
      <Card style={{ width: "320px", margin: "5px" }}>
        <Card.Img variant='top' src={prod.img} alt={prod.title} />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            Autor: {prod.brand}
            <br></br>
            Precio: $ {prod.price}
          </Card.Text>
          <Link to={`/item/${prod.id}`}>
            <Button variant='primary'>+Info</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
