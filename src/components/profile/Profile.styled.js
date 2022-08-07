import styled from "styled-components";

const StyledProfile = styled.div`

    display: flex;
    align-items: center;
    grid-gap: 15px;

    .name {
        text-align: right;
        color: ${({theme}) => theme.colors.primary};
        font-size: ${({theme}) => theme.fontSize.sm$};
        line-height: 20px;
    }

    .picture-container {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        overflow: hidden;

        .picture {
            display: block;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        
       .name {
            font-size: ${({theme}) => theme.fontSize.md};
       }

       .picture-container {
            width: 50px;
            height: 50px;
       }
    }
    
`

export default StyledProfile