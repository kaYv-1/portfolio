import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

export default function CustomTitle({ level = 2, text }) {
  return <Title level={level}>{text}</Title>;
}
