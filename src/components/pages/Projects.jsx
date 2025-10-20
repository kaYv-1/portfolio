import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { motion } from "framer-motion";
import { GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Projects = () => {
  const proyectos = [
    {
      titulo: "Gestor biblioteca",
      descripcion:
        "Aplicación web para crear, editar y eliminar tareas. Desarrollada con Python.",
      link: "https://github.com/kaYv-1/Parcial_3/tree/main",
    },
    {
      titulo: "Urban-Shop",
      descripcion:
        "Tienda en línea con carrito y sistema de pagos simulado. Diseño moderno y responsive.",
      link: "https://github.com/kaYv-1/UrbanShop",
    },
    {
      titulo: "Portafolio Personal",
      descripcion:
        "Mostrar mis proyectos, habilidades y certificaciones.",
      link: "https://github.com/kaYv-1/portfolio/tree/main",
    },
    {
      titulo: "Buscador de Películas",
      descripcion:
        "Web App que consume una API para buscar películas y mostrar detalles con React y Fetch API.",
      link: "https://github.com/kaYv-1/movie-search-app",
    },
    {
      titulo: "API REST de Usuarios",
      descripcion:
        "Backend desarrollado en Node.js y Express para gestión de usuarios con MongoDB.",
      link: "https://github.com/kaYv-1/user-api",
    },
    {
      titulo: "Juego del Ahorcado",
      descripcion:
        "Juego interactivo hecho con JavaScript puro y CSS, totalmente responsive.",
      link: "https://github.com/kaYv-1/ahorcado-js",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        color: "#fff",
        textAlign: "center",
        paddingBottom: "100px",
      }}
    >
      <Title level={2} style={{ color: "#fff", marginBottom: "50px" }}>
        Mis Proyectos
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {proyectos.map((proyecto, i) => (
          <Col key={i} xs={24} sm={12} md={8}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card
                hoverable
                style={{
                  background: "#1f1f2e",
                  border: "1px solid #2f2f3f",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                title={
                  <span style={{ color: "#fff" }}>{proyecto.titulo}</span>
                }
              >
                <Paragraph style={{ color: "#ccc", minHeight: "80px" }}>
                  {proyecto.descripcion}
                </Paragraph>
                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={proyecto.link}
                  target="_blank"
                  style={{
                    background: "#7C3AED",
                    border: "none",
                    marginTop: "10px",
                  }}
                >
                  Ver en GitHub
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default Projects;
