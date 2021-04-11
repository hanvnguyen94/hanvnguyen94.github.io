import React from 'react'
// import clock from '../img/clock.svg'
// import diaphragm from '../img/diaphragm.svg'
// import money from '../img/money.svg'
// import teamwork from '../img/teamwork.svg'
// import home2 from '../img/home2.png'

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
// import profileWhilte from '../img/profile-white.png'

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

const ServicesSection = () => {
	const [element, controls] = useScroll()

	return (
		<Services variants={fade} animate={controls} initial='hidden' ref={element}>
			<Description>
				<h2>
					My <span>quality</span> passion projects.
				</h2>
				<AwesomeSlider startupScreen={startupScreen} animation='fallAnimation'>
					<motion.div>
						<img src={jam} alt='' />
					</motion.div>
					<motion.div>
						<img src={beatMaker} alt='' />
					</motion.div>
					<motion.div>
						<img src={loanCal} alt='' />
					</motion.div>
					<motion.div>
						<img src={yelpLoo} alt='' />
					</motion.div>
					<motion.div>
						<img src={todoList} alt='' />
					</motion.div>
					<motion.div>
						<img src={momentum} alt='' />
					</motion.div>
					<motion.div>
						<img src={mesh} alt='' />
					</motion.div>
					<motion.div>
						<img src={subscription} alt='' />
					</motion.div>
					<motion.div>
						<img src={ticTacToe} alt='' />
					</motion.div>
				</AwesomeSlider>
			</Description>
			{/* <Image>
				<img src={home2} alt='' />
			</Image> */}
		</Services>
	)
}

const Services = styled(About)`
	width: 100%;
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
	img {
		height: 70vh;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
`

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	@media (max-width: 1300px) {
		justify-content: center;
	}
`
const Card = styled.div`
	flex-basis: 20rem;
	.icon {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1rem;
			background: #fff;
			color: #000000;
			padding: 1rem;
		}
	}
`

export default ServicesSection
