import "./Header.css";

const template = () => `

<div class="title">
    <a href="/"><img src="./svg/pinterest.svg" alt="Pinterest logo" class="logo"></a>
    <h1><a href="/">Pinterest</a></h1>
</div>
<button class="watch">Watch</button>
<button class="explore">Explore</button>
<div class="search">
  <img src="./svg/search.svg" alt="Símbolo de búsqueda" class="searchImg">
  <input type="text" id="searchInput" class="searchInput" placeholder="Search for easy dinners, fashion, etc." />
  <div class="filters">
    <select id="order" class="order">
      <option value="latest">latest</option>
      <option value="relevant"> relevant</relevant>
    </select>
    <select id="countInput" class="countInput">
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>
  </div>
</div>
<Button id="searchBtn" class="searchBtn"> Search </Button>
<Button class="logInBtn"> Log in </Button>
<Button class="signUpBtn"> Sign Up </Button>
<div class="arrowDiv">
  <img src="./svg/arrow.svg" class="arrow" alt="Punta de flecha apuntando hacia abajo">
</div>

`;

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
