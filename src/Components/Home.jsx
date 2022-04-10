import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

import { useGetCryptoQuery } from "../services/CryptoAPI";
import CryptoCurrencies from "./CryptoCurrencies";
import News from "./News";

const { Title } = Typography;

function Home() {
  const { data, isFetching } = useGetCryptoQuery(10);

  const globalStats = data?.data?.stats;

  if(isFetching) return "...Loading";

  return (
    <>
      <Title level={2} className="heading">
        Global Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Capital" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
          {/* millify is used to convert numbers into human
          readable format such as it shows 5M instead of 5000000 */}
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title"> Top 10 Crypto Currencies</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">View More</Link></Title>
      </div>
      <CryptoCurrencies simplified /> {/* simplified is used to show only 10 records instead of all */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">View More</Link></Title>
      </div>
      <News simplified /> {/* simplified is used to show only latest news instead of all news */}
    </>
  );
}

export default Home;
