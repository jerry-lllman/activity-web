import { BrowserRouter, useRoutes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import NotFound from "../NotFound";
import Table from "../pages/Table";

import Home from "../pages/Home";

const App = () => {

	const element = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: 'table',
			element: <Table />
		}, {
			path: '*',
			element: <NotFound />
		}
	])

	return (<div className="flex flex-col bg-gray-300 min-h-screen">
		<NavBar />
		<div className="flex-1 p-5">
			{element}
		</div>
	</div>)
}

export default function AppRoutes() {
	return <BrowserRouter><App /></BrowserRouter>
}
