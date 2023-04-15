import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const NavbarReact = (props) => {

  console.log("props for navbar",props);

  const user = props.user;

  const {t, i18n} = useTranslation('dashboard');

  const changeLang = (name) => {
    i18n.changeLanguage(name)
    localStorage.setItem('lang',name)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link className='text-decoration-none' style={{color:'white',marginRight:20}} to='/' >{t('dashboard:charan')}</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='text-decoration-none' style={{color:'white',marginRight:10}} to='/' >{t('dashboard:home')}</Link>
            <Link className='text-decoration-none' style={{color:'white',marginRight:10}} to='/aboutus' >{t('dashboard:aboutus')}</Link>
            {user ? <Link className='text-decoration-none' style={{color:'white',marginRight:10}} to='/contactus' >{t('dashboard:contactus')}</Link> : null}
            
          </Nav>
          <Nav>
            {/* <Link className='text-decoration-none' style={{color:'white',marginRight:10}} to='/contactus' >English</Link>
            <Link className='text-decoration-none' style={{color:'white',marginRight:10}} to='/contactus' >Telugu</Link> */}
            <button style={{width:70,height:25,borderWidth:1,fontSize:10,borderColor:'white',backgroundColor:'unset',color:'white',borderRadius:5,fontFamily:'monospace',marginRight:5}}
              onClick={() => changeLang('en')}
            >{t('dashboard:english')}</button>
            <button style={{width:70,height:25,borderWidth:1,fontSize:10,borderColor:'white',backgroundColor:'unset',color:'white',borderRadius:5}}
              onClick={() => changeLang('te')}
            >{t('dashboard:telugu')}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarReact;