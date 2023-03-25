import { Typography, Row, Space, Avatar } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import avatar from "../../assets/avatar.png";
import "./index.css";

const { Title, Text } = Typography;

function Jumbotron() {
  return (
    <div className="Jumbotron">
      <Space size="large" direction="vertical">
        <Row justify="space-around">
          <Avatar src={avatar} size={200} />
        </Row>

        <Row justify="center">
          <Text className="light Jumbotron-title">
            Hello friend. I'm&nbsp;
            <Text className="bold Jumbotron-title">Nikhil Prabhu</Text>
          </Text>
        </Row>

        <Row justify="center">
          <Title level={3} className="light">
            Scroll down to know more about me
          </Title>
        </Row>

        <Row justify="center">
          <a href="#" title="scroll">
            <ArrowDownOutlined className="Jumbotron-arrow" />
          </a>
        </Row>
      </Space>
    </div>
  );
}

export default Jumbotron;
