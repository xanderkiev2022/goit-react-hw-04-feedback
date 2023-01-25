import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 5px 15px;
  background-color: var(--accent-color);
  color: var(--primary-text-color);
  border: var(--border);
  border-radius: 4px;
  font-weight: 700;
  transition: background-color var(--animation-timing-function);
  &:hover,
  &:focus {
    background-color: var(--accent-color-hover);
  }
`;
