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


`


const LoginLogo = styled.div`
text-align: center;
margin-top : 70%;
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

`