import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../Contexts/StateProvider'
import { auth , provider } from '../firebaseConfig'
import { actionTypes } from "../Contexts/reducer"

function Login() {


    const [state , dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(
            result=>{

                 dispatch({
                     type : actionTypes.SET_USER,
                     user: result.user
                 })
                //console.log(result);
            }
        )
        .catch((error) => 
            alert(error.message)
        );
    };
    return (
        <LoginPage>
            <LoginLogo>
            <h1><span>"Just😂</span><span>Memes"</span></h1>
            <button className = "LoginBtn"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            onClick = {signIn}
            >
              <img
                width="20px"
                style={{ marginBottom: "-2px", marginRight: "10px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              />
              Login with Google
            </button>
            </LoginLogo>
            
        </LoginPage>
    )
}

export default Login


const LoginPage = styled.div`
height : 100vh;
background-color : rgba(240, 237, 23, 1);
`


const LoginLogo = styled.div`

@import url("https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap");

background: radial-gradient(
  circle,
  rgba(255, 252, 0, 1) 0%,
  rgba(240, 237, 23, 1) 100%
);
height: 100%;
text-align: center;
.LoginBtn{
    >img {
    }
    border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  box-shadow: 4px 4px 2px black;
  font-size: 20px;
  :hover{
      background : rgb(66, 196, 237);
      box-shadow: 10px 5px 5px black;
  }

}

display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
font-family: "Luckiest Guy", cursive;


h1 {
  margin: 0;
  font-size: 4.5em;
  padding: 30px;
  color: white;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1);
  span {
    transform: scale(0.9);
    display: inline-block;
  }
  span:first-child {
    animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  }
  span:last-child {
    animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
}

@keyframes bop {
  0% {
    transform: scale(0.9);
  }
  50%,
  100% {
    transform: scale(1);
  }
}

@keyframes bopB {
  0% {
    transform: scale(0.9);
  }
  80%,
  100% {
    transform: scale(1) rotateZ(-3deg);
  }
}


`