import { Th } from './TransactionHistory.styled';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </thead>
  );
};

export default TableHeader;
