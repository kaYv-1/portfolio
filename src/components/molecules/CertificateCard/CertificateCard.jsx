import React from "react";
import { Card, Image, Typography } from "antd";

const { Text } = Typography;

export default function CertificateCard({ title, image }) {
  return (
    <Card
      hoverable
      bordered={false}
      style={{
        backgroundColor: "#1f1f1f",
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
      }}
      cover={
        <Image
          alt={title}
          src={image}
          preview={{ mask: "Ver certificado" }}
          style={{
            borderRadius: "8px",
            padding: "8px",
            height: "160px",
            objectFit: "cover",
          }}
        />
      }
    >
      <Text strong style={{ color: "#fff" }}>
        {title}
      </Text>
    </Card>
  );
}
