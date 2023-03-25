import { Typography, Space, Row } from "antd";
import "./index.css";

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div className="About">
      <Space size="large" direction="vertical">
        <Row justify="center">
          <Title className="underline">About</Title>
        </Row>

        <Row justify="center">
          <Paragraph>
            Hello there! I'm Nikhil Prabhu, and I'm a&nbsp;
            <span className="underline">DevOps Engineer</span> and an&nbsp;
            <span className="underline">Associate Developer</span> at SAP Labs
            India. I have around 4 years of experience working with cloud
            technologies like <span className="underline">AWS</span>,&nbsp;
            <span className="underline">Azure</span>,&nbsp;
            <span className="underline">GCP</span>&nbsp; and&nbsp;
            <span className="underline">Alibaba Cloud</span>.
          </Paragraph>
        </Row>

        <Row justify="center">
          <Paragraph>
            At work, I specialize in automating and optimizing workflows
            using&nbsp;
            <span className="underline">Python</span>,&nbsp;
            <span className="underline">Ansible</span>&nbsp;and&nbsp;
            <span className="underline">Terraform</span>. On the side, I enjoy
            developing command-line utilities and other fancy cross-platform GUI
            programs using lower level languages like{" "}
            <span className="underline">Rust</span>
            ,&nbsp;
            <span className="underline">Go</span> and&nbsp;
            <span className="underline">C/C++</span>. Overall, I love working on
            crazy new ideas using open-source technologies, and I try to
            contribute to the open-source ecosystem in whatever way I can, no
            matter how big or small.
          </Paragraph>
        </Row>
      </Space>
    </div>
  );
}

export default About;
