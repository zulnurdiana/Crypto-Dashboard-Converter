import CryptoConvert from "./components/CryptoConvert";
import NewsCrypto from "./components/NewsCrypto";

function App() {
  return (
    <div className="crypto-dashboard">
      <div class="crypto-wrapper">
        <CryptoConvert />
        <NewsCrypto />
      </div>
    </div>
  );
}

export default App;
