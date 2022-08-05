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
        position: relative;
        top: -10px;
        z-index: -10;
        max-height: 0px;
        overflow: hidden;
        transition: max-height .5s, padding .5s;
    }


    .collapse.show .body {
        max-height: 1000px;
        padding: 2em 1em 1em;
    }

    .collapse .head__icon {
        transition: transform .5s;
        transform: rotate(180deg);
    }

    .collapse.show .head__icon {
        transform: rotate(0deg);
    }

`

export default StyledCollapse