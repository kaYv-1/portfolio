import React from 'react';
import { Input } from 'antd';

export default function CustomInput({ placeholder, ...props }) {
  return <Input placeholder={placeholder} {...props} />;
}
