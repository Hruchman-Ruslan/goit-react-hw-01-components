import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;

  gap: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  color: tomato;
`;
export const Status = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;

  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  width: 70px;
  height: 70px;
`;
export const Name = styled.p`
  font-weight: 400;

  filter: drop-shadow(0px 0px 30px #00ffff);

  :hover {
    filter: drop-shadow(0px 0px 30px tomato);
  }
`;
