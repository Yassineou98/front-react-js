import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Register() {
    const [values, setValues]=useState({
      username:"",
      email:"",
      password:"",
      confirmPassword:"",
    });


    const handleSubmit = (event) =>
    {
        event.prevenDefault();
        alert("form");
    };
    const handleChange = (event)=>{
      setValues({...values,[event.target.name]:event.target.value})
    };
  return (
    <FormContainer>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div className="brand">
                    <h1>Sign IN</h1>
                    </div>
                    <input type="text" placeholder="Username" name="username" onChange={e=> handleChange(e)}/>
                    <input type="text" placeholder="Email" name="email" onChange={e=> handleChange(e)}/>
                    <input type="text" placeholder="Password" name="password" onChange={e=> handleChange(e)}/>
                    <input type="text" placeholder="Confirm Password" name="confirmPassword" onChange={e=> handleChange(e)}/>
                    <button type="submit">Create account</button>
                    <span>Already have an account ?<Link to="/Login">  Login</Link></span>

            </form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;
overflow-x: hidden;
color: #c4c3ca;
line-height: 1.7;
background-color: #1f2029;
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
}
form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #131324;
  border-radius: 1rem;
  padding: 3rem 5rem;
  color: #c4c3ca;
  background-color: #1f2029;

}
input {

  padding: 1rem;
  border-radius: 0.4rem;
  font-size: 1rem;
  &:focus {
    border: 0.1rem solid #1f2029;
    outline: none;
  }
}
button {
  justify-content: center;
  border-radius: 4px;
  height: 44px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: #ffeba7;
  box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
  &:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);
  }
}
span {
  color: white;
  text-transform: uppercase;
  a {
    color: #ffeba7;
    text-decoration: none;
    font-weight: bold;
  }
}
`;

export default Register

