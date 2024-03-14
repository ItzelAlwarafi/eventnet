import React from 'react';
        
//The target="_blank" attribute opens the link in a new tab or window,
function Footer() {
  return (
    <footer className="footer">
      <div>
        <p>Follow us on social media:</p>
        <ul>
          <li><a href="#https://www.facebook.com" target="_blank">Facebook</a></li>
          <li><a href="#https://www.twitter.com" target="_blank">Twitter</a></li>
          <li><a href="#https://www.instagram.com" target="_blank">Instagram</a></li>
        </ul>
      </div>
      <div>
        <p>Contact us:</p>
        <ul>
          <li><a href="#info@EVENTNET.com">info@EVENTNET.com</a></li>
          <li><a href="#tel:+1234567890">+1 (234) 567-890</a></li>
        </ul>
      </div>
      <p>Copyright © 2024 EVENTNET</p>
    </footer>
  );
}

export default Footer;

