import styled from 'styled-components';

export const List = styled.ul`
  margin: 20px 0 0;
`;

export const Item = styled.li`
  margin-bottom: 7px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemTotalResultText = styled.span`
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
