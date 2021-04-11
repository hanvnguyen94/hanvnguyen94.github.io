import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
import ProjectSection from '../components/ProjectSection'

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
			<ServicesSection />
			<ProjectSection />
			<FaqSection />
			<ScrollToTop />
		</motion.div>
	)
}

export default AboutMe
