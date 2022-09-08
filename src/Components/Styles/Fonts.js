import SairaStencilOne from './SairaStencilOne-Regular.ttf';
import Raleway from './Raleway-VariableFont_wght.ttf';
import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'Playball';
        src: url(${SairaStencilOne}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Raleway';
        src: url(${Raleway}) format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: auto;
    }

`;

export default Fonts;
