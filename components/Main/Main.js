import "./Main.css";

const template = () => `
    <h3 id="message"></h3>
    <ul id="results"></ul>
`;

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
