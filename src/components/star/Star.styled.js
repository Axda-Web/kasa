import styled from "styled-components";

const StyledStar = styled.div`

    width: 18px;

    .star {
        width: 100%;
        height: auto;
        display: block;
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        
        width: 25px;
    }
`

export default StyledStar