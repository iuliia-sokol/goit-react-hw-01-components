import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistoryTable}>
      <thead>
        <tr className={css.transactionHistoryTableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionHistoryTableBody}>
        {transactions.map(item => (
          <tr key={item.id}>
            <td className={css.transactionHistoryTableType}>{item.type}</td>
            <td>{item.amount}</td>
            <td className={css.transactionHistoryTableCurrency}>
              {item.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
