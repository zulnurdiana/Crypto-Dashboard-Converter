import React from "react";

const CryptoPrice = ({ mainCurrency, secondCurrency, exchangeRate }) => {
  return (
    <div className="crypto-price">
      <h2>Current Rate</h2>
      <h3>{exchangeRate}</h3>
      <p>
        {mainCurrency} to {secondCurrency}
      </p>
    </div>
  );
};

export default CryptoPrice;
