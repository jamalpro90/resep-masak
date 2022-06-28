import React from 'react';
import './Footer.scss';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <footer>
      {/* Footer Top */}
      <div className="footer-top">
        {/* Footer Item */}
        <div className="footer-item">
          <h3>footer 1</h3>
          <p>tentang kami</p>
          <p>tentang kami</p>
          <p>tentang kami</p>
          <p>tentang kami</p>
        </div>

        {/* Footer Item */}
        <div className="footer-item">
          <h3>footer 2</h3>
          <p>kebijakan</p>
          <p>kebijakan</p>
          <p>kebijakan</p>
          <p>kebijakan</p>
        </div>

        {/* Footer Item */}
        <div className="footer-item">
          <h3>footer 3</h3>
          <p>layanan</p>
          <p>layanan</p>
          <p>layanan</p>
          <p>layanan</p>
        </div>

        {/* Footer Item */}
        <div className="footer-item">
          <h3>footer 4</h3>
          <p>kontak</p>
          <p>kontak</p>
          <p>kontak</p>
          <p>kontak</p>
        </div>

        {/* Footer Item */}
        <div className="footer-item">
          <h3>Medsos</h3>

          <div className="icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <SocialIcon network="facebook" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <SocialIcon network="instagram" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <SocialIcon network="twitter" bgColor="white" style={{ height: 40, width: 40 }} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2022, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
