import "./Footer.css";

const template = () => `
    <p>© 2024 Pinterest - All rights reserved</p>
`;

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
