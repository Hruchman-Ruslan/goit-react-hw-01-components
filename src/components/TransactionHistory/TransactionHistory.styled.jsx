import styled from '@emotion/styled';

export const Table = styled.table`
  display: block;
`;

export const Header = styled.thead`
  outline: 1px solid tomato;
`;

export const List = styled.tr``;

export const ThText = styled.th`
  padding: 20px 120px;
`;

export const Body = styled.tbody``;

export const Key = styled.tr`
  outline: 1px solid tomato;

  :nth-child(2n) {
    background-color: #00ffff;
    color: #010101;
  }
`;

export const TbText = styled.td`
  padding: 20px 120px;
`;
