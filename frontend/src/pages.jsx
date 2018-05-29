import { Router, route } from 'preact-router';
import { h, Component } from 'preact';

import { PagesNav } from './components/pages-nav.jsx';

export class Pages extends Component {
    constructor() {
        super();
    }

    render = () => {
        return (
            <div class="page-wrap">
                <PagesNav />
                <main class="pages">
                    <h2>Pages</h2>
                </main>
            </div>
        );
    }
}