import React, {useState} from 'react';
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai';
import { Box, Btn, Container, EyeBtn, Input, Logo, PasseordEye, Password, Select } from './Style';


const Register = () =>{
    
    const [eye, setEye] = useState(false)
    const toggleBtn = () =>{
        setEye(prevState => !prevState)
    }

    const [state, setState] = useState({});

    const onChange =({target})=>{
        const { name, value} = target;
        setState({ ...state, [name]:value})
    }

    const onSubmit =()=>{
        console.log(state)
        fetch('https://houzing-app.herokuapp.com/api/public/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(state),
            
        }).then(()=> setState({}))
    }

    return(

        <Container>
            <Box>
                <Logo>
                    <h2>Registration</h2>
                </Logo>

                <Input type="text" placeholder='Login'/>
                <Input onChange={onChange} name="firstname" type="text" placeholder='First name'/>
                <Input onChange={onChange} name="lastname" type="text" placeholder='Last name'/>
                <Input onChange={onChange} name="email" type="email" placeholder='Email'/>
                <Select name="roleIdSet"  defaultvalue={1}>
                    <option  name="roleIdSet"  value={[1]}>Haridor</option>
                    <option  name="roleIdSet"  value={[2]}>Mijoz</option>
                </Select>
                <PasseordEye>
                    <Password type={eye ? "text" : "password"} placeholder='Password' required minLength={5} maxLength={8}/>

                   <EyeBtn onClick={toggleBtn}>
                        {eye ?  <AiOutlineEye/>
                             : <AiOutlineEyeInvisible/>
                        }
                    </EyeBtn>
                </PasseordEye>
                <Input onChange={onChange} name="password"  type={eye ? "text" : "password"} placeholder='Re-enter password' required minLength={5} maxLength={8}/>
                
                <Btn onClick={onSubmit}>Login</Btn>

               
                
                
            </Box>
        </Container>
    )
}
export default Register;