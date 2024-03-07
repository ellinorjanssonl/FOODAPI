import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({setName}) => {
  const navigate = useNavigate(); // Hook för att hantera navigering

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lägg till din inloggningslogik här
    // Anta att inloggningen lyckas, navigera sedan till hemsidan
    navigate('/'); // Omdirigera användaren till hemsidan
  };

  return (
    <div>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </div>
  );
}

export default LoginPage;


