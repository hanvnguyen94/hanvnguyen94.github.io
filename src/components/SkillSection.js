import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
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
// import sass from '../img/icons/sass.svg'

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
				<Container>
					<Row>
						<Col>
							<img src={js} alt='' />
							<p>JavaScript</p>
						</Col>
						<Col>
							<img src={react} alt='' />
							<p>React</p>
						</Col>
						<Col>
							<img src={python} alt='' />
							<p>Python</p>
						</Col>
					</Row>

					<Row>
						<Col>
							<img src={django} alt='' />
							<p>Django</p>
						</Col>
						<Col>
							<img src={jquery} alt='' />
							<p>jQuert</p>
						</Col>
						<Col>
							<img src={node} alt='' />
							<p>Node</p>
						</Col>
					</Row>

					<Row>
						<Col>
							<img src={postgresql} alt='' />
							<p>PostgreSQL</p>
						</Col>
						<Col>
							<img src={mongodb} alt='' />
							<p>MongoDB</p>
						</Col>
						<Col>
							<img src={git} alt='' />
							<p>Git</p>
						</Col>
					</Row>

					<Row>
						<Col>
							<img src={html} alt='' />
							<p>HTML</p>
						</Col>
						<Col>
							<img src={css} alt='' />
							<p>CSS</p>
						</Col>
						<Col>
							<img src={bootstrap} alt='' />
							<p>Bootstrap</p>
						</Col>
					</Row>
				</Container>
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
	@media (max-width: 1300px) {
		padding: 0rem 0rem 0rem 3rem;
	}
`

export default ServicesSection
