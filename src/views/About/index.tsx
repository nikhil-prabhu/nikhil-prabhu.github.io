import {
  Typography,
  Space,
  Row,
  Col,
  Steps,
  Divider,
  Descriptions,
} from "antd";
import { useState } from "react";
import "./index.css";

const { Title, Text, Paragraph } = Typography;

interface ExperienceDetails {
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: string;
  organization: string;
  location: string;
}

function About() {
  const [current, setCurrent] = useState(0);
  const experience: ExperienceDetails[] = [
    {
      role: "Associate Developer / DevOps Engineer",
      startDate: "April 2022",
      endDate: "N/A (Ongoing)",
      description: "Lorem ipsum",
      techStack: "Python, Ansible, Terraform",
      organization: "SAP Labs India",
      location: "Bengaluru, Karnataka, India",
    },
    {
      role: "Full Stack Developer",
      startDate: "September 2019",
      endDate: "May 2020",
      description: "Lorem ipsum",
      techStack: "Shell Script, SAP Intelligent RPA",
      organization: "SAP Labs India",
      location: "Bengaluru, Karnataka, India",
    },
    {
      role: "Scholar@SAP",
      startDate: "August 2019",
      endDate: "N/A (Ongoing)",
      description: "Lorem ipsum",
      techStack: "N/A",
      organization: "SAP Labs India",
      location: "Bengaluru, Karnataka, India",
    },
    {
      role: "Intern - Web Design",
      startDate: "May 2018",
      endDate: "July 2018",
      description: "Lorem ipsum",
      techStack: "HTML5, CSS3, Bootstrap, JavaScript",
      organization: "Amphisoft Technologies Pvt. Ltd.",
      location: "Coimbatore, Tamil Nadu, India",
    },
  ];

  function onChange(value: number) {
    setCurrent(value);
  }

  return (
    <div className="About">
      <Space size="small" direction="vertical">
        <Row justify="center">
          <Title className="underline">About</Title>
        </Row>

        <Row justify="center">
          <Paragraph>
            Hello there! I'm Nikhil Prabhu, and I'm a&nbsp;
            <span className="underline">DevOps Engineer</span> and an&nbsp;
            <span className="underline">Associate Developer</span> at SAP Labs
            India. I have around 4 years of experience working with cloud
            technologies like <span className="underline">AWS</span>
            ,&nbsp;
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
            developing command-line utilities and cross-platform GUI programs
            using lower level languages like&nbsp;
            <span className="underline">Rust</span>,&nbsp;
            <span className="underline">Go</span> and&nbsp;
            <span className="underline">C/C++</span>. Overall, I love working on
            crazy new ideas using open-source technologies, and I try to
            contribute to the open-source ecosystem in whatever way I can, no
            matter how big or small.
          </Paragraph>
        </Row>

        <Divider>Experience</Divider>

        <Text type="secondary" italic>
          Click on an item to view its details
        </Text>

        <Row justify="center">
          <Col xs={24} sm={24} md={8} lg={8} xl={6} xxl={6}>
            <Steps
              direction="vertical"
              current={current}
              onChange={onChange}
              progressDot
              items={[
                {
                  title: "Associate Developer / DevOps Engineer",
                  subTitle: "SAP Labs India",
                  description: "Apr 2022 - Present",
                  status: current === 0 ? "finish" : "wait",
                },
                {
                  title: "Full Stack Developer",
                  subTitle: "SAP Labs India",
                  description: "Sep 2019 - May 2020",
                  status: current === 1 ? "finish" : "wait",
                },
                {
                  title: "Scholar@SAP",
                  subTitle: "SAP Labs India",
                  description: "Aug 2019 - Present",
                  status: current === 2 ? "finish" : "wait",
                },
                {
                  title: "Intern - Web Design",
                  subTitle: "Amphisoft Technologies Pvt. Ltd.",
                  description: "May 2018 - Jul 2018",
                  status: current === 3 ? "finish" : "wait",
                },
              ]}
            />
          </Col>

          <Col xs={24} sm={24} md={16} lg={16} xl={18} xxl={18}>
            <Descriptions column={1} style={{ textAlign: "left" }}>
              <Descriptions.Item label="Role">
                {experience[current].role}
              </Descriptions.Item>
              <Descriptions.Item label="Start Date">
                {experience[current].startDate}
              </Descriptions.Item>
              <Descriptions.Item label="End Date">
                {experience[current].endDate}
              </Descriptions.Item>
              <Descriptions.Item label="Description">
                {experience[current].description}
              </Descriptions.Item>
              <Descriptions.Item label="Tech Stack">
                {experience[current].techStack}
              </Descriptions.Item>
              <Descriptions.Item label="Organization">
                {experience[current].organization}
              </Descriptions.Item>
              <Descriptions.Item label="Location">
                {experience[current].location}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default About;
