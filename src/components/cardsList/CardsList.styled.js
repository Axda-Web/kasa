import styled from "styled-components";

const StyledCardsList = styled.section`
    .container {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
       
        padding: 20px;
        border-radius: 25px;
        background-color: ${({theme}) => theme.colors.grey.background};

        .container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        padding: 40px;

        .container {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
        }
    }
`

export default StyledCardsList