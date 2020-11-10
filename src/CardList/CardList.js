import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './CardList.css'
import { NavLink } from 'react-router-dom'

const CardList = (props) => {
    const data = () => {
    return (
        <div>
            {Object.keys(props.details).map((key, index) => {
                 return (<div className="cardBlock" key={key}>
                <Card.Title className="cardTitle">{key}</Card.Title>
                <Card.Text className="cardText">{props.details[key]}</Card.Text>
                </div>)
            })}
        </div>
        
    )}

    return (
        <div className="cardList">
            <Card className="cardInner" border="primary">
                <Card.Header>{props.header}</Card.Header>
                <Card.Body>
                            {/* {
                                Object.keys(props.details).forEach((key) => {
                                return(
                                 <div>
                                 <Card.Title>{key}</Card.Title>
                                 </div>
                                )
                            })
                            }    */}
                            {data()} 
                    {/* <Button  className="navButton"> */}
                        <NavLink to={props.goto} className="navButton"> Edit </NavLink>
                    {/* </Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardList