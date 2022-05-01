import { Typography } from "antd";

const Footer = () => {
  return (
    <footer>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Crypto World <br />
        All rights reserved
      </Typography.Title>
    </footer>
  );
};

export default Footer;
