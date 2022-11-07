import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import logobrandnobg from "../../images/Perla-logo.jpg";
import { Link, NavLink } from "react-router-dom";
import {db} from '../../services/firebaseConfig'
import {collection, getDocs} from 'firebase/firestore'
import React, { useEffect, useState } from 'react';



function NavBar() {
  const styleMenu = { color: "white", fontWeight: "500", textDecoration: "none", fontStyle:"italic", padding:"5px"};

      const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionCat = collection(db, 'categorias');
    getDocs(collectionCat)
        .then((res) => {
            const categorias = res.docs.map((cat) => {
                return {
                    id: cat.id,
                    ...cat.data(),
                };
            });
            setCategories(categorias);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);


  return (
    <header>
      <Navbar>
        <Container>
          <Link to='/'>
            <Navbar.Brand className='col-lg-2'>
              <img
                alt='Perla Libros'
                src={logobrandnobg}
                width='100'
                height='100'
                className='d-inline-block align-top'
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              className='col-lg-1 offset-lg-1 flex-grow-1 '
              style={{ justifyContent: "space-between"}}
            >
              <NavLink>
                
              {categories.map((cat) => (
                    <NavLink style={styleMenu} key={cat.id} to={`/category/${cat.path}`}>
                        {cat.name}
                    </NavLink>
                ))}

              </NavLink>
              <NavLink to='/cart' style={styleMenu}>
                <CartWidget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
