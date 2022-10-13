import styled from 'styled-components';
import {TbBrandTelegram,TbChevronUpLeft, TbBrandInstagram} from 'react-icons/tb';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';
import { ReactComponent as cardHouse } from '../../assets/icons/cardHouse.svg';
import { ReactComponent as cardMaps } from '../../assets/icons/cardMaps.svg';
import { ReactComponent as logoImg } from '../../assets/icons/logo.svg';

const Container = styled.div`
  height: 360px;
  background: #0d263b;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
  width: 100%;
  margin-top: 96px;
`;



const Footer = styled.div`
  display: flex;
  padding: 10px 10px;
  justify-content: space-around;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
  padding: 15px 0;
`;

Content.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-right: 21px;
  min-width:  23px;
  min-height: 23px;
  margin-top: 2px;
  & path {
    fill: white;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: white;
  }
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;


const Span = styled.span``;

Icon.Tg = styled(TbBrandTelegram)`
  margin-right: 18px;
  font-size: 26px;
  margin-top: -3px;
  color: #fff;
`;

Icon.Insta = styled(TbBrandInstagram)`
  margin-right: 18px;
  font-size: 26px;
  margin-top: -3px;
  color: #fff;

`;

const FooterBottom = styled.div`
  display: flex;
  padding: 0px 42px;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-top: 1px solid white;
  width: 100%;
`;

Icon.logo = styled(logoImg)`
  width:  30px;
  height: 30px;
  margin-right: 21px;
  & path {
    fill: white;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;

`;

const DivTex = styled.h2`
  color: #fff;
  margin-left: -15px;
  margin-top: 10px;
`;
const DivLink = styled.h5`
  color: #fff;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width:  33px;
  background: #0061DF;
  border-radius: 3px;
  margin: 0 10px;
  cursor: pointer;
  :hover{
    opacity: .5;
  }
  
`;

Icon.Left = styled(TbChevronUpLeft)`
  font-size: 23px;
  transform: rotate(43deg);
  color: #fff;
  margin-top: 3px;
`;


export {DivTex, Top, DivLink, Div, Container,Footer, FooterBottom, Content, Icon, Span };
