import React from "react";
import { Button, Table, Card, } from "semantic-ui-react";
import Flash from "./Flash";

const Flashs = ({ flashs, remove }) => (


<Card.Group>
  {
    flashs.map( flash => ( 
      <Flash key={flash.id} {...flash} remove={remove}/>
    ))
  }
</Card.Group>

);

export default Flashs;