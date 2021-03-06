import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const About = () => {
  return (
    <section className='section bg-light' id='about'>
      <Container>
        <Row className='justify-content-center'>
          <Col lg={6} md={8}>
            <div className='title text-center mb-5'>
              <h3 className='font-weight-normal text-dark'>
                About <span className='text-warning'>Me</span>
              </h3>
              <p className='text-muted'>
                Facultad de Ingenier铆a - Carrera de Sistemas y Computaci贸n
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h2 className='font-weight-light line-height-1_6 text-dark mb-4'>
              Angelo Benavidez
            </h2>
          </Col>
          <Col md={{ size: 7, offset: 1 }}>
            <Row>
              <Col md={6}>
                <h6 className='text-dark font-weight-light f-20 mb-3'>馃數</h6>
                <p className='text-muted font-weight-light'>
                  Soy estudiante de Ingenier铆a en Sistemas y Computaci贸n de la
                  Pontificia Universidad Cat贸lica del Ecuador. Este proyecto es
                  de car谩cter acad茅mico, realizado en la asignatura de
                  Programaci贸n Avanzada.
                </p>
              </Col>
              <Col md={6}>
                <h6 className='text-dark font-weight-light f-20 mb-3'>馃數</h6>
                <p className='text-muted font-weight-light'>
                  Me gusta el desarrollo Backend, aunque he iniciado mi
                  incursi贸n en el desarrollo frontend, puedes revisar mi
                  <a> </a>
                  <a href='https://github.com/AngeloB9' target='_blank'>
                    GitHub aqu铆
                  </a>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
