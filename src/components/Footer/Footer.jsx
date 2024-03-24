import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import QrCodeImage from '../../assets/qr-code.png'; 

const Footer = () => {
  return (
    <section className='footer'>
       <div className='container'>
          <ul className='footer-header pb-4'>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Why Us</Link></li>
            <li><Link to="#">Platform</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">Contact</Link></li> 
            <li className='email'>hello@ramos.com</li>
          </ul>
          <div className='footer-content'>
            <div className='address1'>
              <h5>Warrensville Heights</h5>
              <p>14418 Vineyard Drive NC <br />44128</p>
            </div>
            <div className='address2'>
              <h5>Saint Louis</h5>
              <p>1366 Penn Street <br />63101</p>
            </div>
            <ul>
              <li>Linkedin</li>
              <li>Instgaram</li>
              <li>Facebook</li>
            </ul>
          
          </div>
          <div className='footer-brand'>
            <h2>Ramos <span><FontAwesomeIcon icon={faRegistered} /></span></h2>
            <div className='footer-links'>
              <Link to="/privacy-policy">Privacy policy</Link>
              <Link to="/license-agreement">License agreement</Link>
            </div>
            <div className='footer-qr pop-out-text'>
              <img src={QrCodeImage} alt="QR Code" />
            </div>
          </div>
       </div>
    </section>
  )
}

export default Footer;
