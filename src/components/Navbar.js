import React from "react";
import { Link, } from "react-router-dom";
import { Input, Menu } from 'semantic-ui-react'

 
  
export default class Navbar extends React.Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing>
            <Menu.Item as={Link} to="/"
            name='home' 
            active={activeItem === 'Home'} 
            onClick={this.handleItemClick}
            />
            <Menu.Item as={Link} to=".././About"
              name='About'
              active={activeItem === 'About'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={Link} to='.././flashcards'
              name='flashcards'
              active={activeItem === 'flashcards'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }

  