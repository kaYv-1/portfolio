import React from "react";
import { Layout, Typography } from "antd";

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

export default function Footer() {
  return (
    <AntFooter
      style={{
        textAlign: "center",
        background: "#0f0f0f",
        color: "#888",
        padding: "40px 0",
        marginTop: "80px",
      }}
    >
      <Text style={{ color: "#888" }}>
        © {new Date().getFullYear()} Tu Nombre — Desarrollador Frontend
      </Text>
    </AntFooter>
  );
}
