import React, { useState } from "react";
import CryptoPrice from "./CryptoPrice";
import axios from "axios";

const CryptoConvert = () => {
  const Crypto = ["BTC", "ETH", "XRP", "ADA", "TRX", "APE", "SOL", "USD"];
  const [mainAmount, setMainAmount] = useState(1);
  const [mainCurrency, setMainCurrency] = useState("BTC");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [result, setResult] = useState(0);

  const getCurrentRate = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: mainCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: secondCurrency,
      },
      headers: {
        "X-RapidAPI-Key": "8a657cf57amsh9db6e845e4bd475p199739jsn8d8444d1c05b",
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            mainAmount
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(exchangeRate);
  console.log(result);

  return (
    <div className="crypto-convert">
      <h1>Crypto Converter 💱</h1>
      <div class="table-convert">
        <table>
          <tbody>
            <tr>
              <td>Main Currency</td>
              <td>
                <input
                  type="number"
                  value={mainAmount}
                  onChange={(e) => setMainAmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={mainCurrency}
                  onChange={(e) => setMainCurrency(e.target.value)}
                >
                  {Crypto.map((coin, index) => (
                    <option value={coin} key={index}>
                      {coin}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Second Currency</td>
              <td>
                <input type="number" disabled value={result} />
              </td>
              <td>
                <select
                  value={secondCurrency}
                  onChange={(e) => setSecondCurrency(e.target.value)}
                >
                  {Crypto.map((coin, index) => (
                    <option value={coin} key={index}>
                      {coin}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <center>
          <button onClick={getCurrentRate}>Convert</button>
        </center>
      </div>
      <CryptoPrice
        mainCurrency={mainCurrency}
        secondCurrency={secondCurrency}
        exchangeRate={exchangeRate}
      />
    </div>
  );
};

export default CryptoConvert;
