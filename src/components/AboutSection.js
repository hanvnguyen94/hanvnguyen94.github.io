import React from 'react'
import profileGreen from '../img/profile-green.png'
// import styled from 'styled-components'
// framer motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from './../animation'
import Wave from './Wave'

import { About, Description, Image, Hide } from '../styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const AboutSection = () => {
	return (
		<About>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>Hello, World.</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							I'm <span>Han</span>
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h4 style={{ opacity: 0.15 }} variants={titleAnim}>
							(the conqueror)
						</motion.h4>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Full-Stack Web Developer | Front-end Developer
				</motion.p>
				{/* <motion.button variants={fade}>Contact Me</motion.button> */}
				<motion.a target='blank' href='https://github.com/hanvnguyen94'>
					<FontAwesomeIcon
						style={{ fontSize: '2rem', marginRight: '1.5rem' }}
						variants={fade}
						icon={faGithub}
					/>
				</motion.a>
				<a target='blank' href='https://www.linkedin.com/in/hnguyen94/'>
					<FontAwesomeIcon
						style={{ fontSize: '2rem' }}
						variants={fade}
						icon={faLinkedinIn}
					/>
				</a>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={profileGreen} alt='han profile' />
			</Image>
			<Wave />
		</About>
	)
}

export default AboutSection
