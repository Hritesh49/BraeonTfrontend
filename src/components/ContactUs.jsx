import React, { useState } from 'react';
import "../assets/Contact.css";

function ContactUs() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [like, setLike] = useState('');
    const [hear, setHear] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to server
        console.log('Form submitted:', { name, email, message });
        // You can also add logic to send form data to your backend here
    };

    return (
        <div className='ContactmainBack'>
            <div className='ContactmainbackSection'>
                <div className='ContactmainVisualdiv'>
                    <img className='lottiediv' src="/ConnectUs.svg" alt="" />
                </div>
                <div className='ContactmainFormdiv'>
                    <h2>Let's Connect.</h2>
                    <p>Contact our team to start the conversation.</p>
                    <form className='ContactmainForm' onSubmit={handleSubmit}>
                        <div className='FormName'>
                            <fieldset className='Formfields'>
                                <label className='Formlabels'> First Name:</label>
                                <input className='Formtext' type="text" value={firstname} required aria-required="true" onChange={(e) => setFirstName(e.target.value)} />
                            </fieldset>
                            <fieldset className='Formfields'>
                                <label className='Formlabels'> Last Name:</label>
                                <input className='Formtext' type="text" value={lastname} required aria-required="true" onChange={(e) => setLastName(e.target.value)} />
                            </fieldset>
                        </div>
                        <fieldset className='Formfields'>
                            <label className='Formlabels'>Corporate Email*</label>
                            <input className='Formtext' type="email" value={email} required aria-required="true" onChange={(e) => setEmail(e.target.value)} />
                        </fieldset>
                        <fieldset className='Formfields'>
                            <label className='Formlabels'>Phone*</label>
                            <input className='Formtext' type="number" value={phone} required aria-required="true" onChange={(e) => setPhone(e.target.value)} />
                        </fieldset>
                        <fieldset className='Formfields'>
                            <label className='Formlabels'>Company Name*</label>
                            <input className='Formtext' type="text" value={company} required aria-required="true" onChange={(e) => setCompany(e.target.value)} />
                        </fieldset>
                        <fieldset className='Formfields'>
                            <label className='Formlabels'>I would like to*</label>
                            <select value={like} onChange={(e) => setLike(e.target.value)} name="I would like to">
                                <option value="Please Select">Please Select</option>
                                <option value="Discuss how Braeontech can help me solve a business challenge">Discuss how Braeontech can help me solve a business challenge</option>
                                <option value="Explore Career Opportunities">Explore Career Opportunities</option>
                                <option value="Join Braeontech's awesome partner network">Join Braeontech's awesome partner network</option>
                                <option value="None of the above,but equally important">None of the above,but equally important</option>
                            </select>
                        </fieldset>
                        <fieldset className='Formfields'>
                            <label className='Formlabels'>How did you hear about us?*</label>
                            <select value={hear} onChange={(e) => setHear(e.target.value)} name="How did you hear about us?*">
                                <option value="Please Select">Please Select</option>
                                <option value="Event">Event</option>
                                <option value="Referral">Referral</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Web Search">Web Search</option>
                                <option value="Others">Others</option>
                            </select>
                        </fieldset>
                        <fieldset className='Formfields'>
                            <label className='Formlabels'>Comments</label>
                            <textarea className='Formtext message' value={message} onChange={(e) => setMessage(e.target.value)} />
                        </fieldset>
                        <p>From time to time, we would like to contact you about our services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below:</p>
                        <div className='FormConsent'>
                            <input className='check' type="checkbox" />
                            <p>I agree to receive other communications from Braeontech.</p>
                        </div>
                        <p>You can unsubscribe from these communications at any time here.</p>
                        <p>By clicking the button below, you consent to allow Braeontech to store and process the personal information submitted above to provide you the content requested.</p>
                        <button className='FormSubmit' type="submit">Contact Us!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs