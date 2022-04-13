import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptoQuery } from "../services/CryptoAPI";

function CryptoCurrencies({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isLoading } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchCurrency, setSearchCurrency] = useState("");

  {
    /* useEffect accepts a function and an array */
  }
  useEffect(() => {
    const filteredData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchCurrency.toLocaleLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptoList, searchCurrency]);

  if (isLoading) return "Loading Currencies...";

  return (
    <>
      {/* The simplified will allow the search bar to hide from the homepage and only show on
      cryptocurrency page  */}

      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search a Currency"
            onChange={(e) => setSearchCurrency(e.target.value)}
          />
        </div>
      )}

      {/* Gutters are spaces between the items(cards), 32, 32 is top to bottom, left to right */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              {/* For dynamically linking */}
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>
                  Price:{" "}
                  {millify(currency.price) < 1
                    ? millify(currency.price, { precision: 6 })
                    : millify(currency.price)}
                </p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>24h Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CryptoCurrencies;
