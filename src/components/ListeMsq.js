import React, { Component } from 'react'
import { CardDeck, Card, Container, Row, Col } from 'react-bootstrap'

export default class ListeMsq extends Component {




    constructor() {
        super()
        this.state = {
            ListeMsq: [],
            recherche:''
        }
    }

    componentDidMount() {
        console.log(this.props.req)
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.props.req, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "a8f261356cmshfdbf0b21fe5b3c3p1cb3cajsn52860ef7a355"
            }
        })
            .then(response => response.json())
            .then(data => {
                const ListeDeMusique = data.data
                this.setState({
                    ListeMsq: ListeDeMusique
                })
            });


    }




    render() {
        {
            if( this.props.req==="" && this.state.recherche===""){
                return(
                    
                    <div>
                        <h1>search .....{console.log("fel sreche")}</h1>
                    </div>
                )
            }
            if (this.state.recherche !== this.props.req) {
                this.setState({ recherche: this.props.req })
                this.componentDidMount()
            }
            
        }
        return (
            <div>
                <Container>
                    <Row>
                        {this.state.ListeMsq.map(item => (
                            <Col>
                                <CardDeck>
                                    <Card style={{ width: '19rem' }} key={item.id} >
                                        <Card.Img src={item.artist.picture_xl} rounded />
                                        <Card.Body>
                                            <Card.Title>{item.title_short}</Card.Title>
                                            <Card.Text>
                                                <audio controls>
                                                    <source src={item.preview} type="audio/mpeg"></source>
                                                </audio>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Artist: {item.artist.name}</small>
                                        </Card.Footer>
                                    </Card>
                                </CardDeck>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

        )
    }
}
