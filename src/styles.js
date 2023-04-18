import styled from 'styled-components'
import { motion } from 'framer-motion'

// styled components
export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: #fff;
	@media (max-width: 1300px) {
		display: block;
		padding: 2rem 2rem;
		text-align: center;
	}
`

export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	z-index: 2;
	h2,
	h4 {
		font-weight: lighter;
	}
	a {
		color: #fff;
	}
	a:hover {
		color: #08ad82;
	}
	@media (max-width: 1300px) {
		padding: 0;
		a {
			display: inline-block;
			margin: 0.5rem 0rem 5rem 0rem;
		}
	}
`

export const Image = styled.div`
	z-index: 2;
	flex: 1;
	overflow: hidden;
	img {
		width: 70%;
		height: 70vh;
		object-fit: cover;
	}
`

export const Hide = styled.div`
	overflow: hidden;
`
