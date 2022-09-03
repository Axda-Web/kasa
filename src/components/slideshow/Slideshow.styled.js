import styled from "styled-components";

const StyledSlideshow = styled.div`
    height: 250px;
    background: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), url(${({backgroundImgUrl}) => backgroundImgUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .arrow {
        cursor: pointer;
        height: 25px;
        transition: transform .2s;
        transform: scale(1);

        &:hover {
            transform: scale(1.05);
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
       height: 300px;
       padding: 20px;

       .arrow {
        min-height: 40px;
       }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
       height: 415px;

       .arrow {
        min-height: 50px;
       }
    }
`

export default StyledSlideshow