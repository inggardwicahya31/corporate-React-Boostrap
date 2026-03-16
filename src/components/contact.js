import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact (){
    return(
        <section id='contact' className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                        <Form.Control  type="text" placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="email" placeholder="Enter your email addres" require />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="tel" placeholder="Enter your email contact number" require />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <Form.Control as="textarea" placeholder="Enter your message" require />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google map'>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202405.34241565317!2d126.97413929999999!3d37.56487609999
                999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2012d5c39cf%3A0x7e11eca1405bf29b!2sSeoul%2C%20Korea%20Selatan!
                5e0!3m2!1sid!2sid!4v1773652927756!5m2!1sid!2sid" allowfullscreen="" loading="
                lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className="fas fa-envelope"></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className="fas fa-phone"></i>
                            000-000-0000
                        </li>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            Seoul, South Korea
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}