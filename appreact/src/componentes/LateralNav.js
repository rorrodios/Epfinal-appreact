import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiViewColumn } from 'react-icons/ci';
import {ImMenu} from 'react-icons/im'
import Search from './Search';
function LateralNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

        
      <Button variant='btn ' onClick={handleShow}>
            <ImMenu/>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
          <div className='container bg-secondary'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
          </div>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
            <div className='container '>
                <Search/>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LateralNav;