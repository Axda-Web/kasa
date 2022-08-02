import styled from "styled-components";

const StyledCollapse = styled.article`

    margin: 1em;

    .head, .body {
        border-radius: 10px;
        padding: 0 1em;
    }

    .head {
        background-color: ${({theme}) => theme.colors.primary};
        color: ${({theme}) => theme.colors.white};
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .body {
        background-color: ${({theme}) => theme.colors.grey.background};
        color: ${({theme}) => theme.colors.primary};
        padding: 2em 1em 1em;
        position: relative;
        top: -10px;
        z-index: -10;
    }

`

export default StyledCollapse