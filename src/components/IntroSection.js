import React from 'react'
// import styled from 'styled-components'
// framer motion
import { motion } from 'framer-motion'
import { titleAnim } from './../animation'

import { About, Description, Hide } from '../styles'

const IntroSection = () => {
	return (
		<About>
			<Description>
				<Hide>
					<motion.h2 variants={titleAnim}>
						Let me <span>introduce</span> myself.
					</motion.h2>
					<motion.p variants={titleAnim}>
						Hi, I am a creative Software Developer based in New Hampshire with a
						flair for creating elegant solutions. I focus on dynamic and
						seamless user interaction. Currently working as a RPA Developer at
						Advata.
					</motion.p>
				</Hide>
			</Description>
		</About>
	)
}

export default IntroSection
