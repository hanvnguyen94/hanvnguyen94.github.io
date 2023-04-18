import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
	const { pathname } = useLocation()
	return (
		<StyledNav>
			<h1>
				<Link id='logo' to='/'>
					Han Nguyen
				</Link>
			</h1>
			<ul>
				<li>
					<Link to='/'>About Me</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/' ? '50%' : '0%' }}
					/>
				</li>
				<li>
					<Link to='/work'>My Projects</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: pathname === '/work' ? '50%' : '0%' }}
					/>
				</li>
			</ul>
		</StyledNav>
	)
}

const StyledNav = styled.nav`
	min-height: 9vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #282828;
	position: sticky;
	top: 0;
	z-index: 10;
	a {
		color: #fff;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	#logo {
		font-family: 'Sofia', cursive;
		font-size: 1.5rem;
		font-weight: lighter;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
	@media (max-width: 1300px) {
		flex-direction: column;
		padding: 0.75rem 1rem;
		#logo {
			display: inline-block;
			margin: 0.75rem;
		}
		ul {
			padding: 0.3rem;
			justify-content: space-around;
			width: 100%;
		}
		li {
			padding: 0;
		}
	}
`

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #08ad82;
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 60%;
	@media (max-width: 1300px) {
		left: 0%;
	}
`

export default Nav
