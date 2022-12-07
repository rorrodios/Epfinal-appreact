import Card from 'react-bootstrap/Card';
import react, {useState} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';


function VideoCard(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>

        
        <Offcanvas show={show} onHide={handleClose} placement="bottom">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{props.nombre}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>{props.description}</Offcanvas.Body>
        </Offcanvas>
        <div className="continer px-3 py-3">
            <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Calificacion: {props.calificacion}</ListGroup.Item>
                <ListGroup.Item>Estreno: {props.estreno}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant="secondary"  className="me-2" onClick={handleShow} >Mas informacion</Button>
            </Card.Body>
            </Card>
        </div>   
    </>

  );
}

export default VideoCard;