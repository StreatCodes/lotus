import { route, getCurrentUrl } from 'preact-router';
import { h, Component } from 'preact';

export class NavBar extends Component {
    constructor() {
        super();
    }

    render = () => {
        return (
        <nav>
            <div class={`nav-icon ${getCurrentUrl().startsWith('/admin/dash') ? 'active' : ''}`} onClick={ e => route('/admin/dash') }>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span class="label">Dash</span>
            </div>
            <div class={`nav-icon ${getCurrentUrl().startsWith('/admin/pages') ? 'active' : ''}`} onClick={ e => route('/admin/pages') }>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <span class="label">Pages</span>
            </div>
            <div class={`nav-icon ${getCurrentUrl().startsWith('/admin/media') ? 'active' : ''}`} onClick={ e => route('/admin/media') }>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span class="label">Media</span>
            </div>

        </nav>
        );
    };
}