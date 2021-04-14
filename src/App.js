import React from 'react'
// import styles & animation
import GlobalStyle from './components/GlobalStyle'
import { AnimatePresence } from 'framer-motion'

import AboutMe from './pages/AboutMe'
import Nav from './components/Nav'
import MyWork from './pages/MyWork'

//Router
import { Switch, Route, useLocation } from 'react-router-dom'

// animation

function App() {
	const location = useLocation()
	return (
		<div className='App'>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/'>
						<AboutMe />
					</Route>
					<Route exact path='/work'>
						<MyWork />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
