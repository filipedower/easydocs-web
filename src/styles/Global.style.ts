import 'antd/dist/antd.min.js'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        padding: 0;
        box-sizing: inherit;
        outline: none;
    }

    html {
        font-size: 62.5%;
        
        @media (max-width: 600px) {
            font-size: 80%;
    }
    }

    body {
        font-size: 1.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        overflow: hidden;
    }
`;