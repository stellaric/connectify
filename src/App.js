import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil/Accueil.js';
import React from 'react';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Accueil} />
                {/* Ajoutez ici d'autres routes si nécessaire */}
            </Switch>
        </Router>
    );
}

export default App;
