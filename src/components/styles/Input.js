import styled from "styled-components";

export const Input = styled.input`
    display: block;
    outline: none;
    width: 100%;
    border: 1px solid #c9c9c9;
    padding: 5px 10px;
    box-sizing: border-box;
    margin-top: 5px;
    &:read-only,
    &:disabled {
        border: none;
        text-overflow: unset;
    }
    &.on-row {
        margin-top: 0;
        padding: 0;
    }
`;