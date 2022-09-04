import styled from "styled-components";

const StyledHome = styled.main`

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    .hero {
        height: 100px;
        padding: 1em;
        border-radius: 10px;
        background:linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url('./assets/img/hero.jpg');
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;

        &__text {
            color: ${({theme}) => theme.colors.white};
            font-size: ${({theme}) => theme.fontSize.xl};
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        .hero {
            height: 150px;
            justify-content: center;

            br {
                display: none;
            }

            &__text {
                font-size: ${({theme}) => theme.fontSize.l};
            }
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        .hero {
            height: 200px;
            padding: 0;

            &__text {
                font-size: ${({theme}) => theme.fontSize.xxl};
            }
        }
    }
`

export default StyledHome