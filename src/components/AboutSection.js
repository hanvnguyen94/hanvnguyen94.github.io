import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components'
// framer motion
import { motion } from 'framer-motion'

import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2>I work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>
							my <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>true.</motion.h2>
					</Hide>
				</motion.div>
				<p>Contact me for any coding related works that you have</p>
				<button>Contact Me</button>
			</Description>
			<Image>
				<img src={home1} alt='guy with a camera' />
			</Image>
		</About>
	)
}

export default AboutSection
