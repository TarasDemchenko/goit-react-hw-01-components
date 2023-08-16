import { Td } from './TransactionHistory.styled';

const TransactionRow = ({ type, amount, currency }) => {
  return (
    <tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </tr>
  );
};
export default TransactionRow;
