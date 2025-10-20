import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { motion } from "framer-motion";
import cert1 from "../../../assets/images/cert1.jpg";

const { Title } = Typography;

const CertificateList = () => {
  const certificates = [
    { id: 1, img: cert1, title: "Certificado React" },
    { id: 2, img: cert1, title: "Certificado JavaScript" },
    { id: 3, img: cert1, title: "Certificado Ant Design" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <Title level={2} style={{ color: "#fff", marginBottom: 40 }}>
        Mis Certificados
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {certificates.map((cert) => (
          <Col xs={24} sm={12} md={8} lg={6} key={cert.id}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card
                hoverable
                cover={
                  <img
                    src={cert.img}
                    alt={cert.title}
                    style={{
                      height: 160,
                      objectFit: "cover",
                      borderRadius: 12,
                    }}
                  />
                }
                style={{
                  background: "#1f1f1f",
                  border: "1px solid #333",
                  color: "#fff",
                  borderRadius: 12,
                }}
              >
                <Title level={5} style={{ color: "#fff" }}>
                  {cert.title}
                </Title>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CertificateList;
