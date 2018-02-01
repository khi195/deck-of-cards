import React from 'react';
import { Row} from 'reactstrap';
import './cards.css';
import Card from './card';


const Cards = (props) => {
  return (
    <div >
    <Row className="cardRow">
      <Card cards={props.cards} onChange={props.onChange} disableCheckbox={props.disableCheckbox}/>
    </Row>
    </div>
  );
};

export default Cards;