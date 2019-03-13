import React from 'react'
import { Card } from 'semantic-ui-react'

const FlashCardExample = () => (
  <Card.Group>
    <Card>
      <Card.Content>
        <Card.Header>{this.state.question}</Card.Header>
        <Card.Description>{this.state.answer}</Card.Description>
      </Card.Content>
    </Card>
    />
  </Card.Group>
)

export default FlashCardExample