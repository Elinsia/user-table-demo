import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    background: rgba(0,0,0,0.5);
`;