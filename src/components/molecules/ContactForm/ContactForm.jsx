import React from 'react';
import { Form, Input, Button, message } from 'antd';

export default function ContactForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    message.success('Mensaje enviado (simulación)');
    form.resetFields();
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Form.Item name="name" label="Nombre" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="message" label="Mensaje" rules={[{ required: true }]}>
        <Input.TextArea rows={4} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Enviar</Button>
    </Form>
  );
}
