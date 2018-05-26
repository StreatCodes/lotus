import { route, getCurrentUrl } from 'preact-router';
import { h, Component } from 'preact';
import { Match } from 'preact-router/match';

export class NavBar extends Component {
    constructor() {
        super();

        console.log(this.props);
    }

    render = () => {
        return (
        <nav>
            <div class={`nav-icon ${getCurrentUrl() == '/admin' ? 'active' : ''}`} onClick={ e => route('/admin') }>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span class="label">Dash</span>
            </div>
            <div class={`nav-icon ${getCurrentUrl() == '/admin/pages' ? 'active' : ''}`} onClick={ e => route('/admin/pages') }>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <span class="label">Pages</span>
            </div>
        </nav>
        );
    };
}