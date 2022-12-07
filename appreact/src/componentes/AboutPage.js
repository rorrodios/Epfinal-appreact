import React, { Component } from "react";
import HeaderHome from "./HeaderHome";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import AccordionDevelopers from "./AccordionDevelopers";


const AboutPage = () => {
    
    return(
        <>
            <HeaderHome/>
            <Container fluid>
                <Row>
                    <Col sm={8}> 
                        <h1>Sobre nosotros</h1>
                        <span>
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
                            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue. 
                        </span>
                    </Col>
                    <Col sm={4}>
                        <h1>Developers</h1>
                        <AccordionDevelopers/>
                    </Col>
                </Row>
            </Container>
        
        
        </>
    )
}

export default AboutPage;