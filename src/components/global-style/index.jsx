// @flow

import {createGlobalStyle} from 'styled-components';
import defaultTheme from '../../styles';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway');
    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        font-family: ${defaultTheme.fonts.family.base};
        font-size: 1.5em;
        font-weight: 400;
    }

    body * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
