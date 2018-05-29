import { Router, Route } from 'preact-router';
import { h, render } from 'preact';

import { Login } from './login.jsx';
import { Admin } from './admin.jsx';

const Root = () => (<a href="/login">Take me to the login</a>);
const NotFound = () => (<h3>404 - Not found</h3>);

const Main = () => (
	<Router>
		<Root path="/" />
		<Login path="/login" />
		<Admin path="/admin" />
		<Admin path="/admin/dash" />
		<Admin path="/admin/pages" />
		<Admin path="/admin/users" />
		<NotFound default />
	</Router>
);

render(<Main />, document.body);