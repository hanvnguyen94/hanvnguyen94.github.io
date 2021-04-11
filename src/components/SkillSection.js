import React from 'react'
// icons
import js from '../img/icons/js.svg'
import react from '../img/icons/react.svg'
import python from '../img/icons/python.svg'
import django from '../img/icons/django.svg'
import jquery from '../img/icons/jquery.svg'
import html from '../img/icons/html.svg'
import css from '../img/icons/css.svg'
import postgresql from '../img/icons/postgresql.svg'
import mongodb from '../img/icons/mongodb.svg'
import bootstrap from '../img/icons/bootstrap.svg'
import node from '../img/icons/node.svg'
import git from '../img/icons/git.svg'
import sass from '../img/icons/sass.svg'

import { About, Description } from '../styles'
import styled from 'styled-components'
import { scrollReveal } from '../animation'
import { motion } from 'framer-motion'
import { useScroll } from './useScroll'

const ServicesSection = () => {
	const [element, controls] = useScroll()

	return (
		<Services
			variants={scrollReveal}
			animate={controls}
			initial='hidden'
			ref={element}
		>
			<Description>
				<motion.h2>
					My <span>skills</span>.
				</motion.h2>
				<Cards>
					<Card>
						<div className='icon'>
							<img src={js} alt='' />
							<p>JavaScript</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={react} alt='' />
							<p>React</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={python} alt='' />
							<p>Python</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={django} alt='' />
							<p>Django</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={node} alt='' />
							<p>Node</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={html} alt='' />
							<p>HTML</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={css} alt='' />
							<p>CSS</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={bootstrap} alt='' />
							<p>Bootstrap</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={postgresql} alt='' />
							<p>PostgreSQL</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={mongodb} alt='' />
							<p>MongoDB</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={jquery} alt='' />
							<p>jQuery</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={git} alt='' />
							<p>Git</p>
						</div>
					</Card>
					<Card>
						<div className='icon'>
							<img src={sass} alt='' />
							<p>SASS</p>
						</div>
					</Card>
				</Cards>
			</Description>
		</Services>
	)
}

const Services = styled(About)`
	justify-content: center;
	padding-right: 0;
	h2 {
		padding-bottom: 5rem;
	}
	p {
		width: 70%;
		padding: 2rem 0rem 2rem 0rem;
	}
	@media (max-width: 1300px) {
		padding: 0rem 0rem 0rem 3rem;
	}
`

const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
`
const Card = styled.div`
	flex-basis: 20rem;
	padding-bottom: 2rem;
	.icon {
		display: flex;
		align-items: center;
		p {
			margin-left: 1rem;
			padding: 1rem;
		}
	}
`

export default ServicesSection
