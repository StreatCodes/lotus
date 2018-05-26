import { Router, Route } from 'preact-router';
import { h, render } from 'preact';

import { Login } from './login.jsx';
import { Admin } from './admin.jsx';

const Main = () => (
	<Router>
		<Login path="/login" />
		<Admin path="/admin"/>
		<Admin path="/admin/dash" />
		<Admin path="/admin/pages" />
		<Admin path="/admin/users" />
	</Router>
);

render(<Main />, document.body);