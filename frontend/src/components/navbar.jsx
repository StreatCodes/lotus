import { Router, route } from 'preact-router';
import { h, Component } from 'preact';

export function NavBar(){
    return (
        <nav>
            <div class={`nav-icon active`}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
                    stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span class="label">Dash</span>
            </div>
        </nav>
    );
}