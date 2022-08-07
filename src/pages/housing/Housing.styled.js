import styled from "styled-components";

const StyledHousing = styled.main`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    .title, .location {
        color: ${({theme}) => theme.colors.primary};
    }

    .title {
        font-weight: 400;
        font-size: ${({theme}) => theme.fontSize.md$};
        margin-bottom: 0;
    }

    .location {
        font-size: ${({theme}) => theme.fontSize.sm};
        margin-top: .5em;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1em 0;
    }

    .collapses {
        display: flex;
        flex-direction: column;
    }


    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {

        .info {
            margin: 1.5rem 0 .5rem;
            display: grid;
            grid-template-areas:    "text container"
                                    "badges container";
            grid-gap: 20px;

            .text {
                grid-area: text;

                .title, .location {
                    margin: 0;
                }
            }

            .badges {
                grid-area: badges;
            }

            .container {
                margin: 0;
                flex-direction: column-reverse;
                align-items: flex-end;
                grid-area: container;
            }
        }
        
        .title {
            font-size: ${({theme}) => theme.fontSize.xxl};
        }

        .collapses {
            flex-direction: row;
            grid-gap: 70px;
        }
    }
`

export default StyledHousing