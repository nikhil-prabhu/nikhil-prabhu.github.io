import React, { useState } from "react";
import {
  HomeOutlined,
  UserOutlined,
  ThunderboltOutlined,
  ExperimentOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./App.css";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "About",
    key: "about",
    icon: <UserOutlined />,
  },
  {
    label: "Skills",
    key: "skills",
    icon: <ThunderboltOutlined />,
  },
  {
    label: "Projects",
    key: "projects",
    icon: <ExperimentOutlined />,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <InfoCircleOutlined />,
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="App-navbar"
      />
    </>
  );
};

export default App;
