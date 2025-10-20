import React from 'react';
import { Card } from 'antd';
import CustomButton from '../../atoms/Button/CustomButton';

export default function ProjectCard({ title, description }) {
  return (
    <Card
      hoverable
      title={title}
      actions={[<CustomButton key="view" text="Ver más" type="link" />]}
    >
      <p>{description}</p>
    </Card>
  );
}
