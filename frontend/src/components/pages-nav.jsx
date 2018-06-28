import { route, getCurrentUrl } from 'preact-router';
import { h, Component } from 'preact';

export class PagesNav extends Component {
    constructor() {
        super();

        this.state = {
            show: true,
            siteTree: []
        }
    }

    render = () => {
        return (
        <div class={`pages-nav ${this.state.show ? 'show' : ''}`}>
            <header>
                <h3>Pages</h3>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222222"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    onclick={e => {this.setState({show: !this.state.show})}}>
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </header>
            <main>
                
            </main>
        </div>
        );
    };
}