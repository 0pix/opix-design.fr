import * as React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./components/layout/Header";
import Portfolio from "./pages/portfolio/Portfolio";

export default function App() {
	return (
		<div>
			<Header/>
			<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/portfolio" element={<Portfolio/>}/>
		</Routes>
		</div>

	);
}


