import { Router } from 'preact-router';
import { h, Component } from 'preact';

import { NavBar } from './components/navbar.jsx';
import { Dash } from './dash.jsx'
import { Pages } from './pages.jsx'

export class Admin extends Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div class="admin">
                <NavBar />
                
                <Router>
                    <Dash path="/admin/" />
                    <Pages path="/admin/pages" />
                </Router>
            </div>
        );
    }
}