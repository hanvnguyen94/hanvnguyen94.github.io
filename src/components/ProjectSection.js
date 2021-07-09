import React from 'react'
import { Link } from 'react-router-dom'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'

// images
import beatMaker from '../img/projects/beatMaker.jpg'
import jam from '../img/projects/jam.jpg'
import loanCal from '../img/projects/loanCal.jpg'
import mesh from '../img/projects/mesh.jpg'
import momentum from '../img/projects/momentum.png'
import subscription from '../img/projects/subscription.png'
import ticTacToe from '../img/projects/ticTacToe.png'
import todoList from '../img/projects/todoList.jpg'
import yelpLoo from '../img/projects/yelpLoo.png'
import ignite from '../img/projects/ignite.jpg'
import firegram from '../img/projects/firegram.jpg'

import { About, Description } from '../styles'
import styled from 'styled-components'
import { fade } from '../animation'
import { motion } from 'framer-motion'
import { useScroll } from './useScroll'

const startupScreen = (
	<div>
		<img src={jam} alt='first path' />
	</div>
)

const ProjectSection = () => {
	const [element1, controls1] = useScroll()

	return (
		<Projects
			variants={fade}
			animate={controls1}
			initial='hidden'
			ref={element1}
		>
			<Description>
				<motion.h2>
					My <span>passion</span> projects.
				</motion.h2>
				<AwesomeSlider startupScreen={startupScreen} animation='fallAnimation'>
					<motion.div data-src={firegram}>
						<Link to='/'>
							<motion.h4>Firegram</motion.h4>
						</Link>
					</motion.div>
					<motion.div data-src={ignite}>
						<Link to='/'>
							<motion.h4>Ignite</motion.h4>
						</Link>
					</motion.div>
					<motion.div data-src={jam}>
						<motion.h4>Music Player</motion.h4>
					</motion.div>
					<motion.div data-src={beatMaker}>
						<motion.h4>The Beat Maker</motion.h4>
					</motion.div>
					<motion.div data-src={loanCal}>
						<motion.h4>Loan Calculator</motion.h4>
					</motion.div>
					<motion.div data-src={yelpLoo}>
						<motion.h4>Yelp Loo App</motion.h4>
					</motion.div>
					<motion.div data-src={todoList}>
						<motion.h4>To-Do List</motion.h4>
					</motion.div>
					<motion.div data-src={momentum}>
						<motion.h4>Momentum Clone</motion.h4>
					</motion.div>
					<motion.div data-src={mesh}>
						<motion.h4>MESH E-Commerce</motion.h4>
					</motion.div>
					<motion.div data-src={subscription}>
						<motion.h4>Subscription Tracking</motion.h4>
					</motion.div>
					<motion.div data-src={ticTacToe}>
						<motion.h4>Retro Tic-Tac-Toe</motion.h4>
					</motion.div>
				</AwesomeSlider>
			</Description>
		</Projects>
	)
}

const Projects = styled(About)`
	width: 100%;
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
`

export default ProjectSection
