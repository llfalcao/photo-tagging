import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 5rem;
    opacity: 1;
  }
`;

export const Table = styled.table`
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.5rem;
  border-collapse: collapse;
  box-shadow: 0 0 5px #000;
  background: #101112;
  color: #fff;
  text-align: center;
  animation: ${slide} 0.3s;
  overflow: hidden;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #272727;

  &:last-child {
    border: none;
  }
`;

export const TableHeader = styled.th`
  padding: 1rem 5rem;
  background: #1a63a8;
`;

export const TableData = styled.td`
  font-size: 1rem;
  padding: 0.5rem 0;
`;
