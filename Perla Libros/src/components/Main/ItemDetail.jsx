import { Container } from "react-bootstrap";
import ItemCount from "./ItemCount";
import Image from "react-bootstrap/Image";

const ItemDetail = ({ item }) => {
  return (
    <Container>
      <div className='container detailCont'>
        <div className='col-6'>
          <Image fluid src={item.img} alt='' />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <ItemCount stock={item.stock} initial={1} />
        </div>
      </div>
    </Container>
  );
};

export default ItemDetail;
