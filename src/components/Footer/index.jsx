import { useNavigate } from 'react-router-dom';
import { Container, Content, Footer, FooterBottom, Top, DivTex,  Icon ,Div, Span, DivLink } from './style';


export const Why = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Footer>
        <Content>
          <Content.Title>Contact Us</Content.Title>
          <Content.Item>
            <Icon.Email /> Namangan region, Pop district, NurObod MFY, Tinchlik street 6-house
          </Content.Item>
          <Content.Item>
            {' '}
            <Icon.Phone /> <Span>998 94 432 44 54</Span>
          </Content.Item>
          <Content.Item>
            <Icon.Email /> <Span>mamutaliyev95@gmail.com</Span> 
          </Content.Item>
        </Content>
        <Content>
          <Content.Title>Wide Renge Of Properties</Content.Title>
  
          <Content.Item> Uzbekistan</Content.Item>
          <Content.Item> India</Content.Item>
          <Content.Item> UAE</Content.Item>
          <Content.Item> Korea</Content.Item>
        </Content>
        <Content>
          <Content.Title>Financing Made Easy</Content.Title>
  
          <Content.Item>Frontend </Content.Item>
          <Content.Item>Backend </Content.Item>
          <Content.Item>Mobile </Content.Item>
          <Content.Item>Flutter </Content.Item>
          <Content.Item>Android </Content.Item>
        </Content>
        <Content>
          <Content.Title>See Neighborhoods</Content.Title>
  
          <Content.Item><Icon.Tg/> t.me/azimjon_m</Content.Item>
          <Content.Item><Icon.Insta/>instagram.com/_azimjon_m</Content.Item>
          <Content.Item><Icon.Insta/>instagram.com/popliklar.uz</Content.Item>
        </Content>
      </Footer>
      <FooterBottom>
        <Div>
          <Icon.logo/> 
            <DivTex>Houzing</DivTex>
          
        </Div>
        <Div>
          <DivLink>Copyright © 2021 CreativeLayers. All Right Reserved.</DivLink>
          <Top onClick={() => navigate("/home")}><Icon.Left/></Top>
          
        </Div>
      </FooterBottom>
    </Container>
  );
};

export default Why;
