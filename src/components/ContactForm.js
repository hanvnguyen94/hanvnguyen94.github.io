import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'
import { About, Description, Hide } from '../styles'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { scrollReveal } from '../animation'

class ContactForm extends Component {
	state = {
		name: '',
		email: '',
		message: '',
	}
	handleSubmit(e) {
		e.preventDefault()
		const { name, email, message } = this.state
		let templateParams = {
			name: name,
			email: email,
			message: message,
		}
		emailjs.send(
			'service_momykq8',
			'template_2j5h4nq',
			templateParams,
			'user_ycQPTV0vafFFz8v5UVteS'
		)
		this.resetForm()
	}
	resetForm() {
		this.setState({
			name: '',
			email: '',
			message: '',
		})
	}
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value })
	}

	render() {
		return (
			<About variants={scrollReveal}>
				<Description>
					<Hide>
						<motion.h2>
							Get in <span>touch</span>.
						</motion.h2>
					</Hide>
					<FormContainer className='row display-section'>
						<motion.div className='col-sm-10 col-md-6 mx-auto mt-5'>
							<Form onSubmit={this.handleSubmit.bind(this)}>
								<FormGroup controlid='formBasicEmail'>
									<motion.h5>Email address</motion.h5>
									<Input
										required
										type='email'
										name='email'
										value={this.state.email}
										className='text-primary'
										onChange={this.handleChange.bind(this, 'email')}
										placeholder='Your email'
									/>
								</FormGroup>
								<FormGroup controlid='formBasicName'>
									<motion.h5>Name</motion.h5>
									<Input
										required
										type='text'
										name='name'
										value={this.state.name}
										className='text-primary'
										onChange={this.handleChange.bind(this, 'name')}
										placeholder='Your name'
									/>
								</FormGroup>
								<FormGroup controlid='formBasicMessage'>
									<motion.h5>Message</motion.h5>
									<Input
										required
										placeholder='Enter your message'
										type='textarea'
										name='message'
										className='text-primary'
										value={this.state.message}
										onChange={this.handleChange.bind(this, 'message')}
									/>
								</FormGroup>
								<motion.button variant='primary' type='submit'>
									Submit
								</motion.button>
							</Form>
						</motion.div>
					</FormContainer>
				</Description>
			</About>
		)
	}
}

const FormContainer = styled(motion.div)`
	border: 3px solid #08ad82;
	button {
		outline: none;
		font-weight: bold;
		font-size: 1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 3px solid #08ad82;
		background: transparent;
		color: fff;
		transition: all 0.5s ease;
		font-family: 'Poppins', sans-serif;
		color: #fff;
		margin-bottom: 2rem;
		&:hover {
			background-color: #08ad82;
			color: #fff;
		}
	}
`
export default ContactForm
