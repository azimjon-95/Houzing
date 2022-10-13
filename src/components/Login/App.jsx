import React, {useState} from 'react';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { AHerf, Box, Btn, Container, Email, EyeBox, ForgotPassword, Logo, PasseordEye, Password, Ptext } from './Styled';

function Login(){

    const [login, setLogin] = useState({});

    const onLogin =({target})=>{
        const { name, value} = target;
        setLogin({ ...login, [name]:value})
    }

    const onSubmitLogin =()=>{
        console.log(login)
        fetch('https://houzing-app.herokuapp.com/api/public/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(login),
            
        })
        .then((res)=> res.json())
        .then(res=> localStorage.setItem('token',res?.authenticationToken))
    }

    /* ____________________________ */

    const [eye, setEye] = useState(false)
    const toggleBtn = () =>{
        setEye(prevState => !prevState)
    }

    return(

        <Container>
            <Box>
                <Logo>
                    <h2>Sign in</h2>
                </Logo>

                <Email onChange={onLogin} name="email"  type="text" placeholder='almamun_uxui@outlook.com'/>
                <PasseordEye>
                    <Password onChange={onLogin} name="password" type={eye ? "text" : "password"} placeholder='Password' required minLength={5} maxLength={8}/>

                    <EyeBox onClick={toggleBtn}>
                        {eye ?  <AiOutlineEye/>
                             : <AiOutlineEyeInvisible/>
   
                        }
                    </EyeBox>

                </PasseordEye>
                <ForgotPassword>
                    <input type="checkbox"/>
                    <Ptext>Remember me</Ptext>
                    <AHerf href=''>Forgot</AHerf>
                </ForgotPassword>
                <Btn onClick={onSubmitLogin} className='Btn'>Login</Btn>

            </Box>
        </Container>
    )
}
export default Login;