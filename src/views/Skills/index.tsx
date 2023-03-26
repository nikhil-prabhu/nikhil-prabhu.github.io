import { Typography, Row, Col, Space } from "antd";
import { skills } from "./skills";
import "./index.css";

const { Title } = Typography;

interface SkillBadgeProps {
  href: string;
  src: string;
  alt: string;
}

function SkillBadge(props: SkillBadgeProps) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <img src={props.src} alt={props.alt} />
    </a>
  );
}

interface SkillContainerProps {
  title: string;
  skills: any[];
}

function SkillContainer(props: SkillContainerProps) {
  return (
    <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
      <div className="Skills-container">
        <Space size="small" direction="vertical">
          <Title level={3} className="medium">
            {props.title}
          </Title>

          <Space
            size="small"
            align="center"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            wrap
          >
            {props.skills.map((val) => (
              <SkillBadge href={val.href} src={val.src} alt={val.alt} />
            ))}
          </Space>
        </Space>
      </div>
    </Col>
  );
}

function Skills() {
  return (
    <div className="Skills">
      <Space size="large" direction="vertical">
        <Row justify="center" align="stretch">
          <Title className="underline">Skills</Title>
        </Row>

        <Row justify="space-around">
          <SkillContainer title="Languages" skills={skills.languages} />
          <SkillContainer
            title="Frameworks & Libraries"
            skills={skills.frameworks}
          />
        </Row>

        <Row justify="space-around">
          <SkillContainer title="Platforms" skills={skills.platforms} />
          <SkillContainer
            title="Cloud Platforms/Technologies"
            skills={skills.cloudPlatforms}
          />
        </Row>

        <Row justify="space-around" align="stretch">
          <SkillContainer
            title="Other Tools/Technologies"
            skills={skills.other}
          />
        </Row>
      </Space>
    </div>
  );
}

export default Skills;
