import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;

    .header__logo {
        width: 120px;
        height: auto;
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
        margin: 2rem 0;

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
`

export default StyledHeader