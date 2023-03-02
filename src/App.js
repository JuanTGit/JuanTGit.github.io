import React, { Component } from 'react'
import NavScroll from './components/Navbar'
import Projects from './views/Projects';
import Resume from './views/Resume';
import Home from './views/Home';
import About from './views/About';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
	return (
	<>
		<NavScroll/>
	  	<div className='container'>
			<Routes>
				<Route path='projects' element={<Projects/>}/>
				<Route path='resume' element={<Resume/>}/>
				<Route path='about' element={<About/>}/>
			</Routes>
	  	</div>
	</>
	)
  }
}
