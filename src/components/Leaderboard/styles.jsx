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

export const TableContainer = styled.div`
  position: absolute;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  padding-top: 3rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #000;
  background: #101112;
  animation: ${slide} 0.3s;
  overflow: hidden;
  color: #fff;
  text-align: center;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #272727;

  &:last-child {
    border: none;
  }
`;

export const TableHead = styled.thead`
  background: #058;
`;

export const TableHeader = styled.th`
  padding: 0.5rem 5rem;
  border-right: 1px solid #222;

  &:last-child {
    border-right: none;
  }
`;

export const TableData = styled.td`
  font-size: 1rem;
  padding: 0.5rem 0;
`;

export const BtnCloseMenu = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 20px;
  height: 20px;
  margin: 0 0 4px auto;
  border-radius: 100%;
  background: none;
  fill: crimson;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
