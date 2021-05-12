
import {Form,Button,} from "react-bootstrap";
const formulaire =()=>{
    return(
      
      <div className="F">
        <Form className="FO"> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <img  className="icon" src="/username.png" style={{width:"50px",height:"50px",borderRadius:"25px"}} alt="icon"/>
    <Form.Control type="Username" placeholder="Enter Username" />
    <Form.Label>Email address</Form.Label>
    <img  className="icon" src="/email.png" style={{width:"50px",height:"50px",borderRadius:"25px"}} alt="icon"/>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <img className="icon" src="/password.png"  style={{width:"50px",height:"50px",borderRadius:"25px"}} alt="icon"/>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
    )
}
export default formulaire;