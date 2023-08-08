import TableHeader from './TableHeader';
import TransactionRow from './TransactionRow';

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <TableHeader />
      <tbody>
        {items.map(transaction => (
          <TransactionRow
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
