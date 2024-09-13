import React, { useState } from "react";
import PizzaLeft from "../assets/pepperoni.jpg";
import "../styles/Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess('');
        } else {
            setErrors({});
            setSuccess('Form submitted successfully!');
        }
    };

    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${PizzaLeft})` }}
            ></div>
            <div className="rightSide">
                <h1> Contact Us</h1>

                <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label >Full Name</label>
                        <input
                            name="name"
                            placeholder="Enter full name..."
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            name="email"
                            placeholder="Enter email..."
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            rows="6"
                            placeholder="Enter message..."
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {errors.message && <p className="error-message">{errors.message}</p>}
                    </div>
                    <button type="submit"> Send Message</button>
                    {success && <p className="success-message">{success}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
