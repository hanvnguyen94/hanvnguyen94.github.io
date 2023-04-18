import React from 'react'
import new_pic from '../img/profile-green.png'
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from './../animation'
import MillenniumFalcon from './MillenniumFalcon'
import { About, Description, Image, Hide } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGithub,
	faLinkedinIn,
	faGoogleDrive,
} from '@fortawesome/free-brands-svg-icons'

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
					I am a creative <strong>Software Developer</strong> based in New
					Hampshire with a flair for creating elegant solutions. I focus on
					dynamic and seamless user interaction. Currently working as a{' '}
					<strong>RPA Developer </strong> at Advata.
				</motion.p>
				<motion.a
					variants={fade}
					target='blank'
					href='https://github.com/hanvnguyen94'
				>
					<FontAwesomeIcon
						style={{ fontSize: '2rem', marginRight: '1.5rem' }}
						icon={faGithub}
					/>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://www.linkedin.com/in/hnguyen94/'
				>
					<FontAwesomeIcon
						style={{ fontSize: '2rem', marginRight: '1.5rem' }}
						icon={faLinkedinIn}
					/>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://drive.google.com/file/d/1_CKr0_BiyycGuQdTcWS-MTYKkszFs-2Q/view?usp=sharing'
				>
					<FontAwesomeIcon
						style={{ fontSize: '2rem', marginRight: '1.5rem' }}
						icon={faGoogleDrive}
					/>
				</motion.a>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={new_pic} alt='han_profile' />
			</Image>
			<MillenniumFalcon />
		</About>
	)
}

export default AboutSection
