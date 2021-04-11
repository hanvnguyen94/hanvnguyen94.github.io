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
						Hello there. I'm a web developer. My previous roles as a sales
						representative, helped me understand the importance of having a
						great website for customers and businesses. I'm excited to start my
						new career as a web developer, I keep a positive attitude when
						tackling a new challenge and work hard to find proper solutions.
					</motion.p>
				</Hide>
			</Description>
		</About>
	)
}

export default IntroSection
