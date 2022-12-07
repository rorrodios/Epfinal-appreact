import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import developers from "./developers/developers.json";
import Figure from "react-bootstrap/Figure";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Container } from "react-bootstrap";

const AccordionDevelopers = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {developers.map((developer) => {
          return (
            <>
              <Accordion.Item eventKey={developer.id}>
                <Accordion.Header>{developer.nombre}</Accordion.Header>
                <AccordionBody>
                  <Container>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={developer.img}
                      />
                    </Figure>
                  </Container>
                  {developer.description}
                </AccordionBody>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
};

export default AccordionDevelopers;
