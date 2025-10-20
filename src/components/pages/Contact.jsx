import React from "react";
import { Typography, Form, Input, Button } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { name, email, message } = values;

    // Crea el enlace mailto con los valores del formulario
    const subject = encodeURIComponent(`Mensaje de ${name}`);
    const body = encodeURIComponent(
      `Hola Angel,\n\n${message}\n\nMi correo de contacto es: ${email}`
    );

    // Redirecciona al cliente de correo del usuario
    window.location.href = `mailto:ang.venegasv@duocuc.cl?subject=${subject}&body=${body}`;

    form.resetFields();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        color: "#fff",
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto",
      }}
    >
      <Title level={2} style={{ color: "#fff", marginBottom: "40px" }}>
        Contáctame
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{
          background: "#1f1f2e",
          padding: "40px",
          borderRadius: "12px",
          border: "1px solid #2f2f3f",
        }}
      >
        <Form.Item
          name="name"
          label={<span style={{ color: "#ccc" }}>Nombre</span>}
          rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
        >
          <Input placeholder="Tu nombre" />
        </Form.Item>

        <Form.Item
          name="email"
          label={<span style={{ color: "#ccc" }}>Correo</span>}
          rules={[
            { required: true, message: "Por favor ingresa tu correo" },
            { type: "email", message: "Ingresa un correo válido" },
          ]}
        >
          <Input placeholder="tuemail@ejemplo.com" />
        </Form.Item>

        <Form.Item
          name="message"
          label={<span style={{ color: "#ccc" }}>Mensaje</span>}
          rules={[{ required: true, message: "Escribe tu mensaje" }]}
        >
          <Input.TextArea rows={5} placeholder="Tu mensaje..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Enviar mensaje
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default Contact;
