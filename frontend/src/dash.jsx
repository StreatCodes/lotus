import { Router, route } from 'preact-router';
import { h, Component } from 'preact';

export class Dash extends Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div class="admin-wrap">
                <main class="dash">
                    <h2>Dash</h2>
                </main>
            </div>
        );
    }
}