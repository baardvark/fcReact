import React from "react";
import { Button, Card, } from "semantic-ui-react";


// const Flashh = ({ id, front, back, remove, }) => (
// <Card>
// <Card.Header>{front}</Card.Header>
// <Card.Description>{back}</Card.Description>
// <Card.Content extra>
// <Button color="blue" onClick={() => remove(id)}>
//     Delete
//   </Button>
// </Card.Content>
// </Card> 
// )

class Flash extends React.Component  {
  state = { frontShown: true }

  toggleCard = () => this.setState({ frontShown: !this.state.frontShown });
  
  render () {
    
    const {id, front, back, remove } = this.props
    const {frontShown} = this.state
    return ( 
    <Card>
      <h3> Question: {front} </h3>
      <h3>Answer: { frontShown ? [<br />]: back  }</h3>
        <Button color="blue" onClick={() => remove(id)}> Delete</Button>
        <Button color="green" onClick={() =>this.toggleCard()} >{frontShown ? "Show Answer" : "Hide Answer" }</Button>
    
    </Card>

    )
    }
}


export default Flash;