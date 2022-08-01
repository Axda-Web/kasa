import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled(Link)`

    display: block;
    text-decoration: none;

    .card {
        display: flex;
        align-items: flex-end;
        padding: 1em;
        height: 250px;
        border-radius: 10px;
        color: ${({theme}) => theme.colors.white};
        background:linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, 0)), ${({theme}) => theme.colors.primary};
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

        &__title {
            max-width: 70%;
            font-size: ${({theme}) => theme.fontSize.md};
        }
    }
`

export default StyledCard