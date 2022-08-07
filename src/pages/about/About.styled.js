import styled from "styled-components";

const StyledAbout = styled.main`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    .cover {
        border-radius: 10px;
        overflow: hidden;
        height: 250px;

        &__picture {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .collapses {
        margin: 1.5em auto;
        max-width: 1000px;
    }

    
`

export default StyledAbout