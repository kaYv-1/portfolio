import React from "react";
import { Space } from "antd";
import CertificateList from "../organisms/CertificateList/CertificateList";

export default function Certificates() {
  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: "100%", paddingTop: "24px" }}
    >
      <CertificateList />
    </Space>
  );
}
