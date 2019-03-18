import React, { Fragment } from 'react'
import { Container  } from 'semantic-ui-react';
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import { Route, Switch } from 'react-router-dom'
import FlashCards from './pages/Flashcards'
import Navbar from './components/Navbar'

class App extends React.Component {
    render() {
        return(
            <Fragment>
                    <Navbar/>
                    <Container>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/About' component={About} />
                            <Route exact path='/flashcards' component={FlashCards} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Container>
            </Fragment>
        )
    }
}

export default App