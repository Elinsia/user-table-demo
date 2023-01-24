import styled from "styled-components";

export const TextArea = styled.textarea`
    display: block;
    outline: none;
    width: 100%;
    border: 1px solid #c9c9c9;
    padding: 5px 10px;
    box-sizing: border-box;
    margin-top: 5px;
    resize: none;
    overflow: hidden;
    &:read-only,
    &:disabled {
        border: none;
    }
    &.on-row {
        margin-top: 0;
        padding: 0;
    }
`;