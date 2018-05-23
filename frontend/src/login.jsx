import { Router, route } from 'preact-router';
import { h, Component } from 'preact';

export class Login extends Component {
    constructor() {
        super();
    }

    login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        for(let val of formData.values()) {
            console.log(val);
        }
        route('/admin');
    }

    render = () => {
        return (
            <main class="login">
                <h2>Admin Login</h2>
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
        );
    }
}