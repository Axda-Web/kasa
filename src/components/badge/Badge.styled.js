import styled from "styled-components";

const StyledBadge = styled.article`
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.xsm};
    padding: .5em 3em;
    border-radius: 10px;
    display: inline-block;

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        
        font-size: ${({theme}) => theme.fontSize.sm};
    }
`

export default StyledBadge