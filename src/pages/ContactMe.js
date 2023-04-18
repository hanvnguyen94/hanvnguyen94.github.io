import React from 'react'
//animation
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components'

const ContactMe = () => {
	return (
		<ContactStyle
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			style={{ background: '#fff' }}
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send me a message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send an email</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Social media</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	)
}

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #08ad82;
	min-height: 90vh;
	@media (max-width: 1300px) {
		padding: 2rem;
		font-size: 1rem;
	}
`

const Title = styled.div`
	margin-bottom: 4rem;
	color: #000000;
	@media (max-width: 1300px) {
		margin-top: 5rem;
		padding: 2rem;
		font-size: 1rem;
	}
`

const Hide = styled.div`
	overflow: hidden;
`

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #08ad82;
`

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`

export default ContactMe
