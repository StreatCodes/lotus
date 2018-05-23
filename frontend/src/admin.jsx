import { Router, route } from 'preact-router';
import { h, Component } from 'preact';

import { NavBar } from './components/navbar.jsx';

export class Admin extends Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div class="admin">
                <NavBar />
                <main class="Admin">
                    <h2>maybe some dash here?</h2>
                    <form onSubmit={this.login} action="/api/login" method="post">
                        <label>
                            Email
                            <input type="email" name="email" placeholder="lotus@streat.io"/>
                        </label>
                        <label>
                            Password
                            <input type="password" name="password" placeholder="**********"/>
                        </label>
                        <button type="submit">Login</button>
                    </form>
                </main>
            </div>
        );
    }
}