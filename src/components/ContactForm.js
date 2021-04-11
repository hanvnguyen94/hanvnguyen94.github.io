import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Form, FormGroup, Input } from 'reactstrap'
import { About, Description, Hide } from '../styles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

class ContactForm extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: '',
	}
	handleSubmit(e) {
		e.preventDefault()
		const { name, email, subject, message } = this.state
		let templateParams = {
			name: name,
			email: email,
			subject: subject,
			message_html: message,
		}
		emailjs.send(
			'service_momykq8',
			'template_2j5h5nq',
			templateParams,
			'user_ycQPTV0vafFFz8v5UVteS'
		)
		this.resetForm()
	}
	resetForm() {
		this.setState({
			name: '',
			email: '',
			subject: '',
			message: '',
		})
	}
	handleChange = (param, e) => {
		this.setState({ [param]: e.target.value })
	}
	render() {
		return (
			<About>
				<Description>
					<Hide>
						<motion.h2>
							Get in <span>touch</span>.
						</motion.h2>
					</Hide>
					<FormContainer className='row display-section'>
						<div className='col-sm-10 col-md-6 mx-auto mt-5'>
							<Form onSubmit={this.handleSubmit.bind(this)}>
								<FormGroup controlId='formBasicEmail'>
									<h5>Email address</h5>
									<Input
										required
										type='email'
										name='email'
										value={this.state.email}
										className='text-primary'
										onChange={this.handleChange.bind(this, 'email')}
										placeholder='Enter email'
									/>
								</FormGroup>
								<FormGroup controlId='formBasicName'>
									<h5>Name</h5>
									<Input
										required
										type='text'
										name='name'
										value={this.state.name}
										className='text-primary'
										onChange={this.handleChange.bind(this, 'name')}
										placeholder='Name'
									/>
								</FormGroup>
								<FormGroup controlId='formBasicMessage'>
									<h5>Message</h5>
									<Input
										required
										type='textarea'
										name='message'
										className='text-primary'
										value={this.state.message}
										onChange={this.handleChange.bind(this, 'message')}
									/>
								</FormGroup>
								<button variant='primary' type='submit'>
									Submit
								</button>
							</Form>
						</div>
					</FormContainer>
				</Description>
			</About>
		)
	}
}

const FormContainer = styled(motion.div)`
	border: 3px solid #23d997;
	button {
		outline: none;
		font-weight: bold;
		font-size: 1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 3px solid #23d997;
		background: transparent;
		color: fff;
		transition: all 0.5s ease;
		font-family: 'Inter', sans-serif;
		color: #fff;
		margin-bottom: 2rem;
		&:hover {
			background-color: #23d997;
			color: #fff;
		}
	}
`
export default ContactForm
