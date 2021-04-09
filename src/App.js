import React from 'react'
// import styles
import GlobalStyle from './components/GlobalStyle'

import AboutMe from './pages/AboutMe'
import Nav from './components/Nav'
import ContactMe from './pages/ContactMe'
import MyWork from './pages/MyWork'
import MovieDetail from './pages/MovieDetail'

//Router
import { Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<Switch>
				<Route exact path='/'>
					<AboutMe />
				</Route>
				<Route exact path='/work'>
					<MyWork />
				</Route>
				<Route path='/work/:id'>
					<MovieDetail />
				</Route>
				<Route path='/contact'>
					<ContactMe />
				</Route>
			</Switch>
		</div>
	)
}

export default App
