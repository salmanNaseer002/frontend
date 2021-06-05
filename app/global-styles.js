import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
    font-size: 62.5%;
}
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
    body{
    font-family: 'Quicksand', sans-serif;
    box-sizing: border-box;
    background:#ececec;
}
@media screen and (min-width: 1400px)
{
    body {
        zoom: 110% !important;
    }
}
@media screen and (min-width: 1600px)
{
    body {
        zoom: 115% !important;
    }
}
@media screen and (min-width: 1800px)
{
    body {
        zoom: 120% !important;
    }
}
@media screen and (min-width: 1900px)
{
    body {
        zoom: 125% !important;
    }
}
@media screen and (min-width: 2000px)
{
    body {
        zoom: 130% !important;
    }
}
@media screen and (min-width: 2100px)
{
    body {
        zoom: 135% !important;
    }
}
@media screen and (min-width: 2200px)
{
    body {
        zoom: 140% !important;
    }
}
@media screen and (min-width: 2300px)
{
    body {
        zoom: 145% !important;
    }
}

@media screen and (min-width: 2400px){
    body {
        zoom: 150% !important;
    }
}

@media screen and (min-width: 2500px){
    body {
        zoom: 165% !important;
    }
}
@media screen and (max-width:1200px){
    html{
        font-size: 55%;
    }
}

@media screen and (max-width:992px){
    html{
        font-size: 50%;
    }
}
@media screen and (max-width:768px){
    html{
        font-size: 45%;
    }
}
@media screen and (max-width:768px){
    html{
        font-size: 40%;
    }
}
`;

export default GlobalStyle;
