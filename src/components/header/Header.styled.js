import styled from "styled-components";

const StyledHeader = styled.header`

    width: 90%;
    max-width: 1200px;
    margin: 1rem auto;

    display: flex;
    justify-content: space-between;

    .logo-container {
        cursor: pointer;

        .header__logo {
            width: 120px;
            height: auto;
        }
    }

    .header__nav {
        display: flex;
        align-items: baseline;
        text-transform: uppercase;
        font-size: ${({theme}) => theme.fontSize.sm};
        margin-top: 1rem;

        li {
            list-style: none;
            margin-left: 2em;

            a:link, a:visited, a:active {
                color: ${({theme}) => theme.colors.primary};
                text-decoration: none;
            }

            a.active {
                text-decoration: underline;
                //text-underline-offset: 1px;
            }
        }
    }

    @media (min-width: ${({theme}) => theme.breakpoints.mobile}) {
        margin: 2rem auto;

        .header__logo {
            width: 150px;
            height: auto;
        }

        .header__nav {
            font-size: ${({theme}) => theme.fontSize.md};
            margin-top: 1rem;

            li {
                list-style: none;
                margin-left: 2em;
            }
        }   
    }

    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {

        .header__nav {
            text-transform: capitalize;

            li {
            margin-left: 2.5em;
            }
        }
    }
`

export default StyledHeader