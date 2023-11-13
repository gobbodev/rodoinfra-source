import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.title-ours{
  margin-bottom:2.34vw;
  color: ${(props) => props.theme.lightBlue};
  text-transform:uppercase;
  font-weight: 800;

  @media only screen and (max-width: 1400px){
    margin-bottom:25px;
  }
  @media only screen and (max-width: 800px){
    margin-bottom:22px;
  }
  @media only screen and (max-width: 600px){
    margin-bottom:20px;
  }
  @media only screen and (max-width: 400px){
    margin-bottom:20px;
  }
}

.title{
  margin-bottom:60px!important;
  color: ${(props) => props.theme.lightBlue};
  text-transform:uppercase;
  font-weight: 800;

  @media only screen and (max-width: 1450px){
    margin-bottom:50px!important;
  }
  @media only screen and (max-width: 1300px){
    margin-bottom:40px!important;
  }
  @media only screen and (max-width: 800px){
   margin-bottom:30px!important;
  }
  @media only screen and (max-width: 600px){
   margin-bottom:20px!important;
  }
  @media only screen and (max-width: 400px){
   margin-bottom:18px!important;
  }
}

.margin-b-30{
  margin-bottom:30px!important;
  @media only screen and (max-width: 1400px) {
    margin-bottom:27px!important;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom:24px!important;
  }
  @media only screen and (max-width: 600px) {
    margin-bottom:20px!important;
  }
  @media only screen and (max-width: 400px) {
    margin-bottom:18px!important;
  }
}

.margin-b-10{
  margin-bottom:10px;
  
  @media only screen and (max-width: 1400px) {
    margin-bottom:9px;
  }
  @media only screen and (max-width: 1200px) {
    margin-bottom:8px;
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom:7px;
  }
}

.section-pad{
  padding-top:95px;
  padding-bottom:95px;
  @media only screen and (max-width: 1600px) {
    padding-top:90px;
    padding-bottom:90px;
  }
  @media only screen and (max-width: 1400px) {
    padding-top:85px;
    padding-bottom:85px;
  }
  @media only screen and (max-width: 1200px) {
    padding-top:60px;
    padding-bottom:60px;
  }
  @media only screen and (max-width: 1000px) {
    padding-top:50px;
    padding-bottom:50px;
  }
  @media only screen and (max-width: 600px) {
    padding-top:40px;
    padding-bottom:40px;
  }
  @media only screen and (max-width: 500px) {
    padding-top:35px;
    padding-bottom:35px;
  }
  @media only screen and (max-width: 400px) {
    padding-top:30px;
    padding-bottom:30px;
  }
}

[class*='font-52'] {
  font-size: 5.2rem;
  @media only screen and (max-width: 1400px) {
    font-size: 4.8rem;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 4.6rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 4.4rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 4.2rem;
  }
  @media only screen and (max-width: 768px) {
    font-size: 3.8rem;
  }
  @media only screen and (max-width: 650px) {
    font-size: 3.6rem;
  }
  @media only screen and (max-width: 500px) {
    font-size: 3.4rem;
  }
  @media only screen and (max-width: 390px) {
    font-size: 3rem;
  }
}

p{
  color: ${(props) => props.theme.lightBlack}
}

h1, h2,  h4, h5{
   font-family: 'Roboto Condensed', sans-serif!important;//remover */
}

h3, p, h6{
  font-family: 'Roboto', sans-serif!important;//remover 
}

html {
  scroll-behavior: smooth !important;
  font-size: 10px !important;
}
//
body {
  background-size: cover;
  background-color:#fff; //remover
  overflow-x: hidden !important;
  font-family: 'Roboto', sans-serif!important; //remover
  
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primaryColor};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.secondaryColor};
    }
}

*:focus {
  outline: transparent !important;
}

a,
button {
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.25s;
}

a:hover,
button:hover {
  transition: 0.25s;
}

a::after,
a::before {
  transition: 0.3s;
}

a:hover::after,
a:hover::before {
  transition: 0.3s;
}

ol,
ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin-bottom: 0 !important;
}

.container {
  max-width: 1390px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.loader-router {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background:  ${(props) => props.theme.primaryColor};
  background: ${(props) => `linear-gradient(
  to right,
  ${props.theme.primaryColor} 8%,
  ${props.theme.secondaryColor + "5a"} 25%,
  ${props.theme.primaryColor} 33%
  )`} ;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
}

@media only screen and (max-width: 1600px) {
  .container {
    max-width: 1280px;
    padding-left:32px;
    padding-right:32px;
  }
}

@media only screen and (max-width: 1400px) {
  .container {
    max-width: 1200px;
  }
}

@media only screen and (max-width: 1250px) {
  .container {
    max-width: 1120px;
    padding-left:28px;
    padding-right:28px;
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    max-width: 968px;
    padding-left:25px;
    padding-right:25px;
  }
}

@media only screen and (max-width: 900px) {
  .error-message {
    font-size: 12px;
    margin-top: 4px;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    max-width: 738px;
  }
}
@media only screen and (max-width: 550px) {
  .container {
    padding-left:20px;
    padding-right:20px;
  }
}
@media only screen and (max-width: 420px) {
  .container {
    padding-left:15px;
    padding-right:15px;
  }
}
@media only screen and (max-width: 350px) {
  .container {
    padding-left:13px;
    padding-right:13px;
  }
}
`;
