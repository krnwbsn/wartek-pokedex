import styled from 'styled-components';
import type { IStyleProps } from '@interfaces/istyleprops';

export const Container = styled.div`
  height: 20px;
  width: 100%;
  background-color: #e0e0de;
  border-radius: 8px;
  margin: 8px 0px;
`;

export const Filter = styled.div<IStyleProps>`
  height: 100%;
  width: ${({ completed }) => (completed ? completed : 0)}%;
  background-color: #ffcb05;
  border-radius: inherit;
  text-align: right;
`;

export const Label = styled.span`
  padding: 8px;
  color: white;
  font-weight: bold;
`;
