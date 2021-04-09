import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components'
// framer motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from './../animation'
import Wave from './Wave'

import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>I work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							my <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact me for any coding related works that you have
				</motion.p>
				<motion.button variants={fade}>Contact Me</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={home1} alt='guy with a camera' />
			</Image>
			<Wave />
		</About>
	)
}

export default AboutSection
