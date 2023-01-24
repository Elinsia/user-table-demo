import styled from 'styled-components';

export const Button = styled.button`
    position: relative;
    background: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 5px;
    padding: 8px 15px;
    &.primary {
        background: #FFBD76;
        color: #fff;
    }
    &.secondary {
        border: 1px solid #be8ec6;
        background: #be8ec6;
        color: #fff;
    }
    &.danger {
        border: 1px solid #FF4E50;
        color: #FF4E50;
    }
    &.full-width {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        margin: 0 auto;
    }
    :disabled {
        opacity: 0.3;
        cursor: none;
        pointer-events: none;
    }
`;