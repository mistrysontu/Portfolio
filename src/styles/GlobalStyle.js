import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }

    .light-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #ff7675;
        --background-dark-color: #F1F1F1;
        --background-dark-grey: #e4e4e4;
        --border-color: #cbced8;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #151515;
        --font-light-color: #313131;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #E4E4E4;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }
    .dark-theme{
        --primary-color: #007bff;
        --primary-color-light: #057FFF;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --background-dark-grey: #191D2B;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-light-color-2: rgba(3,127,255,.3);
        --white-color: #FFF;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191D2B;
        --scrollbar-bg-color: #383838;
        --scrollbar-thump-color: #6b6b6b;
        --scrollbar-track-color: #383838;
    }
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-size: 1.1rem;
        font-family: 'Nunito', sans-serif;
    }

    body{
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    a{
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        font-size: 1rem;
    }

    h1{
        font-size:3.5rem;
        color:font-variant(--white-color);
        span{
            font-size: 3.5rem;
        }
    }
    span{
        color: var(--primary-color);
    }
`
export default GlobalStyle;