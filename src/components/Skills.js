import React from 'react'
import '../styles/SkillsStyle.css';
import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        
        <section className='skill-section' id='skills'>
            <Container fluid className='h-full'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <h3 className='head'>Skills</h3>
                        <h1 className='title'>What I Can Do</h1>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/html5.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>HTML5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/css3.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>CSS3</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 mt-lg-0 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/js.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>JAVASCRIPT</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/python.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>PYTHON</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/flask.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>FLASK</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/django.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>DJANGO</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/github.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>GITHUB</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/bootstrap.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>BOOTSTRAP5</h4>
                            </div>
                        </Col>
                        <Col md={6} lg={4} className='mb-3 mb-lg-0 mt-3 columns'>
                            <div className='skill-menu'>
                                <img src='/Images/mysql.svg' alt='Skills-Img' className='img-fluid w-25' />
                                <h4>MySQL</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
};



export default Skills;