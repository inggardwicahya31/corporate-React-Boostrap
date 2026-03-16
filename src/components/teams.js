import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import img1 from '../assets/images/team1.jpg';
import img2 from '../assets/images/team2.jpg';
import img3 from '../assets/images/team3.jpg';
import img4 from '../assets/images/team4.jpg';
import img5 from '../assets/images/team5.jpg';
import img6 from '../assets/images/team6.jpg';
import img7 from '../assets/images/team7.jpg';
import img8 from '../assets/images/team8.jpg';

const teamsData = [
  {
    id: 1,
    image: img1,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Gabriel Hart',
    designation: 'CEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 2,
    image: img2,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Antony',
    designation: 'Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 3,
    image: img3,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nicholas Perry',
    designation: 'UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 4,
    image: img4,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Wills',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 5,
    image: img5,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sophia Pitt',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 6,
    image: img6,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Taylor Lopez',
    designation: 'Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 7,
    image: img7,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ryan Giggs',
    designation: 'Content Writer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  },
  {
    id: 8,
    image: img8,
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Smith',
    designation: 'SEO Expert',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
  }
]


export default function AppTeams(){
    return(
        <section id="teams" className='block teams-block'>
           <Container fluid>
                <div className='title-holder'>
                    <h2>Our Teams</h2>
                    <div className='subtitle'>some of our experts</div>
                </div>
                <Row>
                    {
                        teamsData.map((team) => {
                            return (
                                <Col sum={3} key={team.id}>
                                    <div className='image'>
                                        <Image src={team.image} />
                                        <div className='overlay'>
                                            <div className='socials'>
                                                <ul>
                                                    <li><a href={team.fbLink}></a><i class="fab fa-facebook-f"></i></li>
                                                    <li><a href={team.twitterLink}></a><i class="fab fa-twitter"></i></li>
                                                    <li><a href={team.linkedinLink}></a><i class="fab fa-linkedin-in"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h3>{team.name}</h3>
                                        <span className='designation'>{team.designation}</span>
                                        <p>{team.description}</p>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}