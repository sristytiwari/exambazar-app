import React, { PureComponent } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class LandingPage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            exams: [],
            streams: []

        }
    }
    componentDidMount() {
        console.log('hii')
        fetch(`https://www.exambazaar.com/api/coding-round/routes//exam-info/8971180896`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                console.log(response.data.streams, "streams")
                this.setState({
                    exams: response.data.exams,
                    streams: response.data.streams

                })
            })

    }


    render() {
        console.log(this.state)

        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Exam Bazaar</Navbar.Brand>

                </Navbar>
                <div>
                    <h3>Exams</h3>
                    <Carousel showArrows={true} dedo>
                        

                            {
                                this.state.exams.map((item, index) => {
                                    return (
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={item.logo} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    Rank - {item.rank}
                                                </Card.Text>
                                                <Button variant="primary">see example question</Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })
                            }
                        
                    </Carousel>




                </div>
                <div>
                    <h3>Streams</h3>
                    <Carousel showArrows={true} dedog>
                        

                            {
                                this.state.streams.map((item, index) => {
                                    return (

                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={item.logo.black} />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                    Rank - {item.rank}
                                                </Card.Text>
                                                <Button variant="primary">see example question</Button>
                                            </Card.Body>
                                        </Card>


                                    )
                                })
                            }
                        
                    </Carousel>

                </div>




            </div>
        )
    }
}

export default LandingPage