import styled from "styled-components";

const StyledCollapse = styled.article`

    margin: 1em 0;
    width: 100%;

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

        &__text {
            font-size: ${({theme}) => theme.fontSize.sm$};
        }

        &__icon {
            height: 10px;
        }
    }

    .body {
        background-color: ${({theme}) => theme.colors.grey.background};
        color: ${({theme}) => theme.colors.primary};
        font-size: ${({theme}) => theme.fontSize.sm$};
        position: relative;
        top: -10px;
        z-index: -10;
        max-height: 0px;
        overflow: hidden;
        transition: max-height .5s, padding .5s;
        line-height: 1.5;

        .equipments-container {
            padding-left: 0;

            .equipment {
                list-style: none;
                list-style-position: outside;
            }
        }
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


    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        
        .head {
            &__text {
                font-size: ${({theme}) => theme.fontSize.md};
            }

            &__icon {
                height: 15px;
            }
        }

        .body {
            font-size: ${({theme}) => theme.fontSize.md};
        }
    }

`

export default StyledCollapse