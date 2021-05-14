import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
  }

  html {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*pode ser transparent também*/
  }

  html,
  body,
  #root,
  .App{
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #e5e5e5;
    overflow: hidden;
  }

  :root{
    --bg: #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #ccc;
    --speed: 500ms;
    --primary: #000;
    --secondary: #15181c;
    --search: #202327;
    --white: #fff;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --success: #68de4a;
    --like: #e8265e;
    --linha: #ff6363;
    --barra: #d92429;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #12a7c8;
    --gray-light: #9b9b9b;
    --transition-time:.3s;
    --light-grey:#ececec;
  --dark-grey:#acacac;
  --green:#4CAF50;
  --red:#FF5252;
  --black-transparent:rgba(0,0,0, 0.2);
  }

  body, button, input {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a{
    color: var(--gray-light);
    text-decoration: none;
  }

/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.301);
  border-radius: 0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.301);
}


`;

export default GlobalStyled;
