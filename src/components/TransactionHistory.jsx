import '../styles/transactionHistory.css'
import PropTypes from "prop-types";

const TransactionHistory = ({transactions}) => {
  return (
    <div className='transactions'>
        <table className='transactionHistory'>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((transaction) =>(
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr> 
                ))}
            </tbody>
        </table>
    </div>
  )
}

TransactionHistory.prototypes = {
    transactions : PropTypes.object.isRequired,
}

export default TransactionHistory