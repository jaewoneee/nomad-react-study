import { useEffect, useState } from "react";

function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const coinsFunc = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await res.json();
      const coins = json.slice(0, 20);
      setCoins(coins);
      setLoading(false);
    };
    coinsFunc();
  }, []);
  return (
    <div className="CoinTracker">
      <h1>The Coins!{loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((value) => {
            return <option key={value.symbol}>{value.name}</option>;
          })}
        </select>
      )}
    </div>
  );
}

export default CoinTracker;
