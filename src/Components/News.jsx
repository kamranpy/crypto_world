import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";

import { useGetNewsQuery } from "../services/NewAPI";
import { useGetCryptoQuery } from "../services/CryptoAPI";
import Load from "./Load";

const { Text, Title } = Typography;
const { Option } = Select;

const sampleNewsImage =
  "data:image/jpeg;base64,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";

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 15;
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory,
    count,
  });
  const { data } = useGetCryptoQuery(100);

  if (!cryptoNews?.value) return <Load />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Search Currency News"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency"></Option>
            {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || sampleNewsImage}
                  alt="News"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)} ...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      sampleNewsImage
                    }
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
      ;
    </Row>
  );
}

export default News;
