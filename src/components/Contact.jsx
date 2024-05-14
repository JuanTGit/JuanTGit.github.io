import { DiGithubBadge } from "react-icons/di";
import { BiLogoLinkedinSquare, BiLogoInstagramAlt } from "react-icons/bi";
import Form from 'react-bootstrap/Form'
function Contact(){
    return (
        <div className="container">
            <h1 className="text-center">Contact Page</h1>
            {/* Form */}
            <div className='form-group'>
                    <Form className='col-10 mt-1'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="mb-3" type="text" placeholder="Name" />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} />
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

export default Contact

