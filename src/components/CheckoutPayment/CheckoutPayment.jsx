import React, { useState } from 'react';

import './checkoutPayment.scss';
import { FaWallet, FaCreditCard } from 'react-icons/fa';
import { FcMoneyTransfer } from 'react-icons/fc';
import { GiBank } from 'react-icons/gi';

const CheckoutPayment = () => {
  const [options, setOptions] = useState(1);

  const chooseOption = (index) => {
    setOptions(index);
  };

  return (
    <>
      <section>
        <div className="payment_container">
          <div className="payment_sidebar">
            <div
              className={options === 1 ? 'active' : 'tabs'}
              onClick={() => chooseOption(1)}
            >
              <span>
                <FaWallet /> Wallet
              </span>
            </div>
            <div
              className={options === 2 ? 'active' : 'tabs'}
              onClick={() => chooseOption(2)}
            >
              <span>
                <FaCreditCard /> Credit/Debit Cards
              </span>
            </div>
            <div
              className={options === 3 ? 'active' : 'tabs'}
              onClick={() => chooseOption(3)}
            >
              <span>
                <FcMoneyTransfer /> Upi
              </span>
            </div>
            <div
              className={options === 4 ? 'active' : 'tabs'}
              onClick={() => chooseOption(4)}
            >
              <span>
                <GiBank /> Netbanking
              </span>
            </div>
          </div>
          <div className="payment_details">
            <h1>Wallet</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPayment;
