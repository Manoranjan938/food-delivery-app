import React from 'react'
import Transaction from '../Transaction'

import './transaction.scss'

const Transactions = () => {
    return (
        <>
            <div className="transactions_container">
                <div className="transactions_header">
                    <h1>Payments</h1>
                    <div className="filters_payment"></div>
                </div>
                <div className="transactions_content">
                    <Transaction />
                </div>
            </div>
        </>
    )
}

export default Transactions
