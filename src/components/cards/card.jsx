import React from 'react';
import { Card,  CardTitle, CardText, Col, CardImg, Input } from 'reactstrap';
import map from 'lodash/map';
import './cards.css';

const SingleCard = (props) => {
  return  map(props.cards, card =>
        <Col sm="2" className="cardCol">
          <Card>
          <CardImg top width="100%" src={cardImage(card.suit)} alt="Card image cap" />
            <CardTitle>{card.suit}</CardTitle>
            <CardText>{card.value}</CardText>
            <Input type="checkbox" onChange={()=>{props.onChange({card})}} disabled={props.disableCheckbox}/>
          </Card>
        </Col>
  )
}

const cardImage = (suit) => {
  switch(suit){
    case 'club':
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/SuitClubs.svg/2000px-SuitClubs.svg.png"
    case 'spade':
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Spades.svg/200px-Spades.svg.png"
    case 'heart':
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/U%2B2665.svg/1024px-U%2B2665.svg.png"
    case 'diamond':
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/SuitDiamonds.svg/240px-SuitDiamonds.svg.png"
    default:
        return;
}
}

export default SingleCard;