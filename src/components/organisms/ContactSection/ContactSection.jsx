import React from "react";
import { Typography, Form, Input, Button, Space } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}
    >
      <Title level={2} style={{ color: "#fff", marginBottom: 20 }}>
        Contáctame
      </Title>
      <Paragraph style={{ color: "#ccc", marginBottom: 40 }}>
        Si deseas colaborar o tienes alguna pregunta, no dudes en escribirme.
      </Paragraph>

      <Form layout="vertical">
        <Form.Item label={<span style={{ color: "#ccc" }}>Nombre</span>}>
          <Input placeholder="Tu nombre" />
        </Form.Item>
        <Form.Item label={<span style={{ color: "#ccc" }}>Correo</span>}>
          <Input placeholder="Tu correo electrónico" />
        </Form.Item>
        <Form.Item label={<span style={{ color: "#ccc" }}>Mensaje</span>}>
          <Input.TextArea placeholder="Tu mensaje" rows={4} />
        </Form.Item>
        <Space>
          <Button type="primary">Enviar</Button>
        </Space>
      </Form>
    </motion.div>
  );
};

export default ContactSection;
