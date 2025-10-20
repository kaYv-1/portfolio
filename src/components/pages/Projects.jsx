import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ color: "#fff", textAlign: "center" }}
    >
      <Title level={2} style={{ color: "#fff", marginBottom: "50px" }}>
        Mis Proyectos
      </Title>
      <Row gutter={[32, 32]} justify="center">
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <Col key={p} xs={24} sm={12} md={8}>
            <Card
              hoverable
              style={{
                background: "#1f1f2e",
                border: "1px solid #2f2f3f",
              }}
              title={<span style={{ color: "#fff" }}>Proyecto {p}</span>}
            >
              <Paragraph style={{ color: "#ccc" }}>
                Descripción detallada del proyecto {p}.
              </Paragraph>
              <Button type="primary">Ver más</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Projects;
