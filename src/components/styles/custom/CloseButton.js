import styled from 'styled-components';

export const CloseButton = styled.button`
  position: absolute;
  display: block;
  border: none;
  outline: none;
  background: none;
  width: 30px;
  height: 30px;
  top: 0;
  right: 0;
  cursor: pointer;
  &:after {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 100%;
    height: 100%;
    line-height: 30px;
    font-size: 30px;
  }
`;
