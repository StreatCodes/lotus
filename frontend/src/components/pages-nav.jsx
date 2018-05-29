import { route, getCurrentUrl } from 'preact-router';
import { h, Component } from 'preact';

export class PagesNav extends Component {
    constructor() {
        super();
    }

    render = () => {
        return (
        <div class="pages-nav">
            <header>
                <h3>Pages</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </header>
            <main></main>
        </div>
        );
    };
}