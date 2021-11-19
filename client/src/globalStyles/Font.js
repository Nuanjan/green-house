import { createGlobalStyle } from "styled-components";
import colors from "./colorStyles";

export const Font = createGlobalStyle`

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat Alternates', sans-serif;

}
h1, h2,h3,p {
    color: ${colors.darkGrayBrown}
}

`;
