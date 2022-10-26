import { BrowserRouter, useRoutes } from "react-router-dom";
import NotFound from "../NotFound";
import Form from "../pages/Form";

import Home from "../pages/Home";

const App = () => {

	const element = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: 'form',
			element: <Form />
		},
		{
			path: '*',
			element: <NotFound />
		}
	])

	return element
}

export default function AppRoutes() {
	return <BrowserRouter><App /></BrowserRouter>
}