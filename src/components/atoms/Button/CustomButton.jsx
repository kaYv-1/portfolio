import React from 'react';
import { Button } from 'antd';

export default function CustomButton({ text, type = 'primary', onClick }) {
  return <Button type={type} onClick={onClick}>{text}</Button>;
}
