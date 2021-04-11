import React from 'react'
// import clock from '../img/clock.svg'
// import diaphragm from '../img/diaphragm.svg'
// import money from '../img/money.svg'
// import teamwork from '../img/teamwork.svg'
// import home2 from '../img/home2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPython,
	faNodeJs,
	faReact,
	faBootstrap,
	faHtml5,
	faCss3,
	faGit,
	faJs,
} from '@fortawesome/free-brands-svg-icons'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import { About, Description, Image } from '../styles'
import styled from 'styled-components'
import { fade } from '../animation'
import { motion } from 'framer-motion'
import { useScroll } from './useScroll'

const ServicesSection = () => {
	const [element, controls] = useScroll()

	return (
		<Services variants={fade} animate={controls} initial='hidden' ref={element}>
			<Description>
				<motion.h2>
					My <span>skills</span>.
				</motion.h2>
				<Carousel>
					<div className='icon'>
						<i className='devicons devicons-javascript'></i>
						<h5>JavaScript</h5>
						<br />
						<FontAwesomeIcon
							icon={faReact}
							style={{ width: '5%', height: '5%' }}
						/>
						<h5>React</h5>
					</div>
					<div className='icon'>
						<FontAwesomeIcon
							icon={faJs}
							style={{ width: '5%', height: '5%' }}
						/>
						<h5>JavaScript</h5>
						<br />
						<FontAwesomeIcon
							icon={faReact}
							style={{ width: '5%', height: '5%' }}
						/>
						<h5>React</h5>
					</div>
				</Carousel>
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
	i {
		width: 20%;
		height: 20%;
	}
	.icon {
		display: flex;
		/* align-items: center; */
		/* h3 {
			margin-left: 1rem;
			background: #fff;
			border: 2px solid #23d997;
			color: #000000;
			padding: 1rem;
		} */
	}
`

export default ServicesSection
