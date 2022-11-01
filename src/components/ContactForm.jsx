import React, { useState, useRef } from 'react';

//dep
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef();
	const [success, setSuccess] = useState();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm('service_7p4jcx6', 'template_hxwbogr', form.current, 'user_avKSmKDpabna9zdyhP1Wq')
			.then(
				result => {
					setSuccess('erfolg');
				},
				error => {
					setSuccess('gescheitert');
				}
			);
	};

	return (
		<div className='contact-form--1'>
			<div className='container'>
				{/* <div className='row row--35 align-items-start'> */}
				{/* <div className='col-lg-6 order-2 order-lg-1'> */}
				<div className='section-title text-left mb--50'>
					<h3 className='title'>Schreib uns gerne</h3>
					<p className='description'>Wir freuen uns von dir zu hören</p>
				</div>
				<div className='form-wrapper'>
					<form ref={form} onSubmit={sendEmail}>
						<label htmlFor='item01'>
							<input type='text' name='name' id='item01' placeholder='Name *' />
						</label>

						<label htmlFor='item02'>
							<input type='text' name='email' id='item02' placeholder='Email *' />
						</label>

						<label htmlFor='item03'>
							<input type='text' name='phone' id='item03' placeholder='Telefon' />
						</label>
						<label htmlFor='item04'>
							<textarea type='text' id='item04' name='message' placeholder='Nachricht' />
						</label>
						<button
							className='rn-button-style--2 btn-solid'
							type='submit'
							value='Send'
							name='submit'
							id='mc-embedded-subscribe'>
							Abschicken
						</button>
					</form>
					{success === 'erfolg' ? (
						<div>Erfolg</div>
					) : success === 'gescheitert' ? (
						<div>kein Erfolg</div>
					) : null}
				</div>
			</div>
		</div>
		// </div>
		// </div>
	);
};

export default ContactForm;
