import React from 'react';
import { Container as BootstrapContainer, Row, Col } from 'react-bootstrap';

export const Container = (props) => {
  return (
    <BootstrapContainer>
      <Row className="justify-content-md-center">
        <Col>
            {props.children}
        </Col>
      </Row>
    </BootstrapContainer>
  );
}