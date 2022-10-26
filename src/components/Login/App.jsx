import React, {useState} from 'react';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { AHerf, Box, Btn, Container, Email, EyeBox, ForgotPassword, Logo, PasseordEye, Password, Ptext } from './Styled';

import { useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

function Login(){

    const request = useRequest();
    const [body, setBody] = useState({});
    const navigate = useNavigate();
  
    const onLogin = ({ target: { value, placeholder } }) => {
      setBody({
        ...body,
        [placeholder]: value,
      });
    };
    const info = () => {
      message.info("Successfully logged in ");
    };
  
    const onSubmit = async () => {
      request({
        url: `/public/auth/login`,
        method: "POST",
        body,
        me: true,
      }).then((res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res?.authenticationToken);
        }
        info();
      });
    };

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
                <Btn onClick={onSubmit} className='Btn'>Login</Btn>

            </Box>
        </Container>
    )
}
export default Login;