import { DiGithubBadge } from "react-icons/di";
import { BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [alert, setAlert] = useState({
        show: false,
        message: '',
        variant: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_yo0uyqb', // EmailJS service ID
            'template_2ymcze5', // EmailJS template ID
            formData,
            'uKIZgGlygsFWRAfn7' // EmailJS user ID
        )
        .then(response => {
            setAlert({
                show: true,
                message: 'Message sent successfully!',
                variant: 'success'
            });
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
            setAlert({
                show: true,
                message: 'Error sending message',
                variant: 'danger'
            })
            console.error(error);
        });
    };

    return (
        <div className="container">
            {alert.show && (
                <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
                    {alert.message}
                </Alert>
            )}
            <h1 className="text-center">Contact Page</h1>
            {/* Form */}
            <div className='form-group'>
                <Form className='col-10 mt-1' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <div className='text-end form-btn'>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </div>
                </Form>
            </div>
            {/* Contact Links */}
            <div className="col-10 text-center">
                <ul className="list-inline">
                    <li className="list-inline-item project-icon"><DiGithubBadge /></li>
                    <li className="list-inline-item project-icon"><BiLogoInstagramAlt /></li>
                    <li className="list-inline-item project-icon"><BiLogoLinkedinSquare /></li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;