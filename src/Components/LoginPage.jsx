import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = ({setName, onLogin}) => {
  const navigate = useNavigate(); // Hook för att hantera navigering

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    onLogin(name);
    navigate('/'); // Omdirigera användaren till hemsidan
  };

  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label className='Label'>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
          <Form.Label className='Label'>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label className='Label'>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
}

export default LoginPage;


