import { Router, route, getCurrentUrl } from 'preact-router';
import { h, Component } from 'preact';

import { NavBar } from './components/navbar.jsx';
import { Dash } from './dash.jsx'
import { Pages } from './pages.jsx'
import { Media } from './media.jsx';

export class Admin extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        if(getCurrentUrl().match(/\/admin\/?$/)) {
            //If logged in rout to dash otherwise route to login
            route('/admin/dash');
        }
    }

    render = () => {
        return (
            <div class="admin">
                <NavBar />
                
                <Router>
                    <Dash path="/admin/dash" />
                    <Pages path="/admin/pages" />
                    <Media path="/admin/media" />
                </Router>
            </div>
        );
    }
}