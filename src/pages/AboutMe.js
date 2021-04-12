import React from 'react'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
// import FaqSection from '../components/FaqSection'
import ProjectSection from '../components/ProjectSection'
import Contact from '../components/ContactForm'

//animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollToTop from '../components/ScrollToTop'

const AboutMe = () => {
	return (
		<motion.div
			variants={pageAnimation}
			exit='exit'
			initial='hidden'
			animate='show'
		>
			<AboutSection />
			<SkillSection />
			<ProjectSection />
			{/* <FaqSection /> */}
			<Contact />
			<ScrollToTop />
		</motion.div>
	)
}

export default AboutMe
