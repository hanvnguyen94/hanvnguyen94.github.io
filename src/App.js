import React from 'react'
// import styles
import GlobalStyle from './components/GlobalStyle'

import AboutMe from './pages/AboutMe'
import Nav from './components/Nav'
import ContactMe from './pages/ContactMe'
import MyWork from './pages/MyWork'

//Router
import { Switch, Route, useLocation } from 'react-router-dom'

// animation
import { AnimatePresence } from 'framer-motion'

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
					<Route path='/contact'>
						<ContactMe />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	)
}

export default App
