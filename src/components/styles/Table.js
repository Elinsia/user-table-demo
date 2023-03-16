import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background: #fafafa;
  border-spacing: 0 15px;
  border-collapse: separate;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
  tr {
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
    border-radius: 5px;
  }
  thead {
    tr {
      box-shadow: none;
      border-radius: 0px;
    }
  }
  th {
    text-align: left;
    &:last-child {
      text-align: center;
    }
  }
  th,
  td {
    margin: 0;
    padding: 10px;
    vertical-align: middle;
  }
  td {
    background: #fff;
  }
`;
