import styled from "styled-components";

const StyledFooter = styled.footer`
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.black};
    padding: 3em;

    .logo {
        width: 100px;
        margin: 0 auto;

        img {
            display: block;
            width: 100%;
        }
    }

    .text {
        font-size: ${({theme}) => theme.fontSize.sm};
        text-align: center;
        margin-top: 2em;
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {

        padding-bottom: 1em;
        
        .text {
            font-size: ${({theme}) => theme.fontSize.md};
        }
    }
`

export default StyledFooter