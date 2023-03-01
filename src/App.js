import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Projects from './views/Projects';
import Resume from './views/Resume';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
	return (
	<>
		<Navbar/>
	  	<div className='container'>
			<Routes>
				<Route path='projects' element={<Projects/>}/>
				<Route path='resume' element={<Resume/>}/>
			</Routes>
	  	</div>
	</>
	)
  }
}
