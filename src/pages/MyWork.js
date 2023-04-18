import React from 'react'

// images
import ignite from '../img/projects/ignite.jpg'
import beatMaker from '../img/projects/beatMaker.jpg'
import jam from '../img/projects/jam.jpg'
import loanCal from '../img/projects/loanCal.jpg'
import mesh from '../img/projects/mesh.jpg'
import momentum from '../img/projects/momentum.png'
import subscription from '../img/projects/subscription.png'
import ticTacToe from '../img/projects/ticTacToe.png'
import yelpLoo from '../img/projects/yelpLoo.png'

import styled from 'styled-components'
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
	const [element1, controls1] = useScroll()
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
		<Work exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider}></Frame1>
				<Frame2 variants={slider}></Frame2>
				<Frame3 variants={slider}></Frame3>
				<Frame4 variants={slider}></Frame4>
			</motion.div>

			{/* project */}

			{/* project 2 */}
			<Movie ref={element} variants={fade} animate={controls} initial='hidden'>
				<motion.h2 variants={fade}>Ignite</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Hide>
					<motion.img variants={photoAnim} src={ignite} alt='ignite' />
					<motion.p variants={fade}>
						Games information app built with React hooks and Redux to enhance
						user interface to give the most updated games info from rawg.io api.
					</motion.p>
					<motion.a
						variants={fade}
						style={{ marginRight: '1rem' }}
						target='blank'
						href='https://github.com/hanvnguyen94/ignite'
					>
						<motion.button variants={fade}>Front-End Repo</motion.button>
					</motion.a>
					<motion.a
						variants={fade}
						target='blank'
						href='https://www.hanvsolo.com/ignite/'
					>
						<motion.button variants={fade}>Deployed Site</motion.button>
					</motion.a>
				</Hide>
			</Movie>

			<Movie
				ref={element1}
				variants={fade}
				animate={controls1}
				initial='hidden'
			>
				<motion.h2 variants={fade}>Music Player</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<Hide>
					<motion.img variants={photoAnim} src={jam} alt='jam' />
					<motion.p variants={fade}>
						Feeling like you need a chill playlist for better concentration on
						your coding daily tasks? Check out my chillhop playlist as link
						below.
					</motion.p>
					<motion.a
						variants={fade}
						style={{ marginRight: '1rem' }}
						target='blank'
						href='https://github.com/hanvnguyen94/jam-player'
					>
						<motion.button variants={fade}>Front-End Repo</motion.button>
					</motion.a>
					<motion.a
						variants={fade}
						target='blank'
						href='https://hanvnguyen94.github.io/jam-player/'
					>
						<motion.button variants={fade}>Deployed Site</motion.button>
					</motion.a>
				</Hide>
			</Movie>
			<Movie
				ref={element2}
				variants={fade}
				animate={controls2}
				initial='hidden'
			>
				<motion.h2 variants={fade}>The Beat Maker</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img variants={photoAnim} src={beatMaker} alt='the-beat-maker' />
				<motion.p variants={fade}>
					Simple browser application engineerd with vanilla JavaScript.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/the-beat-maker'
				>
					<motion.button variants={fade}>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://hanvnguyen94.github.io/the-beat-maker/'
				>
					<motion.button variants={fade}>Deployed Site</motion.button>
				</motion.a>
			</Movie>
			<Movie
				ref={element3}
				variants={fade}
				animate={controls3}
				initial='hidden'
			>
				<motion.h2 variants={fade}>Yelp Loo</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img variants={photoAnim} src={yelpLoo} alt='yelpLoo' />
				<motion.p variants={fade}>
					This full-stack application can be viewed as a clone of Yelp.com. It
					has two resources which are user and loos. The user will be able to
					create an account and organize their "public bathroom" online, which
					stores all related information like photos and addresses.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/yelp-loo-client'
				>
					<motion.button variants={fade}>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/yelp-loo-api'
				>
					<motion.button variants={fade}>Back-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://hanvnguyen94.github.io/yelp-loo-client/#/'
				>
					<motion.button style={{ marginTop: '1rem' }} variants={fade}>
						Deployed Site
					</motion.button>
				</motion.a>
			</Movie>
			<Movie
				ref={element4}
				variants={fade}
				animate={controls4}
				initial='hidden'
			>
				<motion.h2 variants={fade}>Loan Calculator</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img variants={photoAnim} src={loanCal} alt='loanCal' />
				<motion.p variants={fade}>
					A loan calculator made with React. It will help users determine the
					monthly payments on a loan. Simply enter the loan amount, term and
					interest rate in the fields below and click calculate.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/loan-calculator'
				>
					<motion.button>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://hanvnguyen94.github.io/loan-calculator/#/'
				>
					<motion.button variants={fade}>Deployed Site</motion.button>
				</motion.a>
			</Movie>
			<Movie
				ref={element5}
				variants={fade}
				animate={controls5}
				initial='hidden'
			>
				<motion.h2 variants={fade}>Momentum Clone</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img variants={photoAnim} src={momentum} alt='momentum' />
				<motion.p variants={fade}>
					My first React Client Site built as a clone of the famous Chrome
					extension "Momentum". It basically will generate new quotes, pictures
					and also trigger weather base on provided zip code everytime you
					visit.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/momentum-clone-client'
				>
					<motion.button variants={fade}>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://hanvnguyen94.github.io/momentum-clone-client/#/'
				>
					<motion.button variants={fade}>Deployed Site</motion.button>
				</motion.a>
			</Movie>
			<Movie
				ref={element6}
				variants={fade}
				animate={controls6}
				initial='hidden'
			>
				<motion.h2 variants={fade}>MESH E-Commerce</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img variants={photoAnim} src={mesh} alt='mesh' />
				<motion.p variants={fade}>
					MESH is an e-commerce platform that aims to promote and handle the
					purchasing of consumer electronics. Guests can see all the products
					from the home page. To buy them, a guest can sign-up and buy an item
					straight from the home page. All purchases are securely handled by
					React Stripe.js, an industry-trusted software.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/jam-player'
				>
					<motion.button variants={fade}>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/MESHisBest/mesh-ecommerce-backend'
				>
					<motion.button variants={fade}>Back-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://meshisbest.github.io/mesh-ecommerce-client/#/'
				>
					<motion.button style={{ marginTop: '1rem' }} variants={fade}>
						Deployed Site
					</motion.button>
				</motion.a>
			</Movie>
			<Movie
				ref={element7}
				variants={fade}
				animate={controls7}
				initial='hidden'
			>
				<motion.h2 variants={fade}>Subscription Tracking</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img
					variants={photoAnim}
					src={subscription}
					alt='subscription'
				/>
				<motion.p variants={fade}>
					This full-stack application got inspired by the traditional To-Do List
					has two resources. There are user and subscription. The user will be
					able to create an account and organize their "online subscriptions",
					which helps them avoid paying extra fee when their free trial is over.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/subscriptions-tracking-app-client'
				>
					<motion.button variants={fade}>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/tracking-server'
				>
					<motion.button>Back-End Repo</motion.button>
				</motion.a>
				<motion.a
					variants={fade}
					target='blank'
					href='https://hanvnguyen94.github.io/subscriptions-tracking-app-client/'
				>
					<motion.button style={{ marginTop: '1rem' }} variants={fade}>
						Deployed Site
					</motion.button>
				</motion.a>
			</Movie>
			<Movie
				ref={element8}
				variants={fade}
				animate={controls8}
				initial='hidden'
			>
				<motion.h2>Retro Tic-Tac-Toe</motion.h2>
				<motion.div variants={lineAnim} className='line'></motion.div>
				<motion.img variants={photoAnim} src={ticTacToe} alt='ticTacToe' />
				<motion.p variants={fade}>
					My first Tic-Tac-Toe game project created with Javascript and jQuery.
					This application allows user to play Tic-Tac-Toe against themself.
				</motion.p>
				<motion.a
					variants={fade}
					style={{ marginRight: '1rem' }}
					target='blank'
					href='https://github.com/hanvnguyen94/tic-tac-toe-client'
				>
					<motion.button variants={fade}>Front-End Repo</motion.button>
				</motion.a>
				<motion.a
					target='blank'
					href='https://hanvnguyen94.github.io/tic-tac-toe-client/'
				>
					<motion.button variants={fade}>Deployed Site</motion.button>
				</motion.a>
			</Movie>
			<ScrollToTop />
		</Work>
	)
}

const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
	@media (max-width: 1300px) {
		padding: 2rem 2rem;
	}
	h2 {
		padding: 1rem 0rem;
		color: #fff;
		font-size: 2.5rem;
	}
`
const Movie = styled(motion.div)`
	padding-bottom: 10rem;
	p {
		color: #ccc;
		font-size: 1.75rem;
	}
	.line {
		height: 0.5rem;
		background: #08ad82;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
	button {
		outline: none;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 3px solid #08ad82;
		background: transparent;
		color: #ccc;
		transition: all 0.5s ease;
		font-family: 'Poppins', sans-serif;
		&:hover {
			background-color: #08ad82;
			color: #000000;
		}
	}
	@media (max-width: 1300px) {
		p {
			font-size: 1.5rem;
		}
		img {
			width: 100%;
			height: 45vh;
			object-fit: cover;
		}
		button {
			font-size: 1rem;
		}
		h2 {
			font-size: 2rem;
		}
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
