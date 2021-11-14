import styled from 'styled-components';

export const TypeBadge = styled.div`
  background-color: ${({ color }) => (color ? color : '#000')};
  border-radius: 8px;
  font-size: 8px;
  color: white;
  width: auto;
  padding: 2px 8px;
  margin-right: 4px;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 4px 0px;
`;
