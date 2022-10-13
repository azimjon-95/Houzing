import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`;
export const Box = styled.div`
    width: 580px;
    height: 320px;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 10px 30px;
`;



export const Logo = styled.div`
    width: 100%;
    height: 25px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    h2{
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: #0D263B;
    }
`;
export const Email = styled.input`
    width: 100%;
    height: 40px;
    margin: 15px 0;
    outline: none;
    font-size: 16px;
    color: #767676;
    border: none;
    border-bottom: 2px solid #E6E9EC;
    :hover{
        border-bottom: 2px solid #00fb08;
    }
`;

export const PasseordEye = styled.div`
    width: 100%;
    height: 40px;
    margin: 15px 0;
    text-indent: 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #E6E9EC;
    position: relative;
    :hover{
        border-bottom: 2px solid #00fb08;
    }
`;

export const Password = styled.input`    
    width: 466px;
    height: 38px;
    margin: 5px 0;
    font-size: 16px;
    outline: none;
    color: #767676;
    border: none;
    border-radius: 5px;
`;

export const EyeBox = styled.button`
    width: 38px;
    height: 38px;
    border: none;
    background-color: transparent;
    svg{
        font-size: 22px;
        color: #696969;
    }
`;


export const ForgotPassword = styled.div`
    width: 100%;
    height: 18px;
    margin: 10px 0;
    display: flex;
    align-items: center;
`;

export const AHerf = styled.a`
    font-weight: 400;
    font-size: 16px;
    margin-left: auto;
    line-height: 24px;
    text-decoration-line: underline;
    color: #0061DF;
    cursor: pointer;
`;

export const Ptext = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin: 0 10px;
    color: #696969;
`;

export const Btn = styled.button`
    width: 100%;
    border: none;
    font-weight: 700;
    font-size: 16px;
    margin-top: 15px;
    line-height: 16px;
    cursor: pointer;
    color: #FFFFFF;
    height: 44px;
    background: #0061DF;
    border-radius: 2px;
`;

