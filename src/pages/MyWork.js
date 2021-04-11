import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// images
import beatMaker from '../img/projects/beatMaker.jpg'
import jam from '../img/projects/jam.jpg'
import loanCal from '../img/projects/loanCal.jpg'
import mesh from '../img/projects/mesh.jpg'
import momentum from '../img/projects/momentum.png'
import subscription from '../img/projects/subscription.png'
import ticTacToe from '../img/projects/ticTacToe.png'
import todoList from '../img/projects/todoList.jpg'
import yelpLoo from '../img/projects/yelpLoo.png'

//animation
import { motion } from 'framer-motion'
import {
	sliderContainer,
	pageAnimation,
	fade,
	photoAnim,
	lineAnim,
	slider,
} from '../animation'
import { useScroll } from '../components/useScroll'
import ScrollToTop from '../components/ScrollToTop'

const MyWork = () => {
	const [element, controls] = useScroll()
	const [element2, controls2] = useScroll()
	const [element3, controls3] = useScroll()
	const [element4, controls4] = useScroll()
	const [element5, controls5] = useScroll()
	const [element6, controls6] = useScroll()
	const [element7, controls7] = useScroll()
	const [element8, controls8] = useScroll()
	return (
		// after added motion to Work styled component
		// now hav access to the props styles
		<Work
			exit='exit'
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			style={{ background: '#fff' }}
		>
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>
			<Movie>
				<motion.h2 variants={fade}>Jam Player</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/jam-player'>
					<Hide>
						<motion.img variants={photoAnim} src={jam} alt='jam' />
					</Hide>
				</Link>
			</Movie>
			<Movie ref={element} variants={fade} animate={controls} initial='hidden'>
				<motion.h2>The Beat Maker</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/the-beat-maker'>
					<img src={beatMaker} alt='the-beat-maker' />
				</Link>
			</Movie>
			<Movie
				ref={element2}
				variants={fade}
				animate={controls2}
				initial='hidden'
			>
				<motion.h2>Yelp Loo</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/yelp-loo'>
					<img src={yelpLoo} alt='yelpLoo' />
				</Link>
			</Movie>
			<Movie
				ref={element3}
				variants={fade}
				animate={controls3}
				initial='hidden'
			>
				<motion.h2>To-Do List</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/todo-list'>
					<img src={todoList} alt='todoList' />
				</Link>
			</Movie>
			<Movie
				ref={element4}
				variants={fade}
				animate={controls4}
				initial='hidden'
			>
				<motion.h2>Loan Calculator</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/loan-calculator'>
					<img src={loanCal} alt='loanCal' />
				</Link>
			</Movie>
			<Movie
				ref={element5}
				variants={fade}
				animate={controls5}
				initial='hidden'
			>
				<motion.h2>Momentum Clone</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/momentum'>
					<img src={momentum} alt='momentum' />
				</Link>
			</Movie>
			<Movie
				ref={element6}
				variants={fade}
				animate={controls6}
				initial='hidden'
			>
				<motion.h2>MESH E-Commerce</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/mesh'>
					<img src={mesh} alt='mesh' />
				</Link>
			</Movie>
			<Movie
				ref={element7}
				variants={fade}
				animate={controls7}
				initial='hidden'
			>
				<motion.h2>Subscription Tracking</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/subscription'>
					<img src={subscription} alt='subscription' />
				</Link>
			</Movie>
			<Movie
				ref={element8}
				variants={fade}
				animate={controls8}
				initial='hidden'
			>
				<motion.h2>Retro Tic-Tac-Toe</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Link to='/work/tic-tac-toe'>
					<img src={ticTacToe} alt='ticTacToe' />
				</Link>
			</Movie>
			<ScrollToTop />
		</Work>
	)
}

// adding motion to styled component
// nicely doneeee
const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	@media (max-width: 1300px) {
		padding: 2rem 2rem;
	}
	h2 {
		padding: 1rem 0rem;
	}
`
const Movie = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`

const Hide = styled.div`
	overflow: hidden;
`

const Frame1 = styled(motion.div)`
	position: fixed;
	left: 0;
	top: 10%;
	width: 100%;
	height: 100vh;
	background: #fffebf;
	z-index: 2;
`

const Frame2 = styled(Frame1)`
	background: #ff8efb;
`

const Frame3 = styled(Frame1)`
	background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
	background: #8effa0;
`
export default MyWork
