import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { motion } from "framer-motion";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import cert1 from "../../assets/images/cert1.jpg";
import cert2 from "../../assets/images/cert2.jpg";
import cert3 from "../../assets/images/cert3.jpg";
import me from "../../assets/images/perfil.jpg";

const { Title, Paragraph } = Typography;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Homes = () => {
  const certificados = [cert1, cert2, cert3];

  return (
    <motion.div initial="hidden" animate="show" style={{ color: "#fff" }}>
      {}
      <motion.section
        variants={fadeIn}
        style={{
          textAlign: "center",
          marginBottom: "160px",
        }}
      >
        <img
          src={me}
          alt="Mi foto"
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #7C3AED",
            marginBottom: "30px",
          }}
        />
        <Title level={2} style={{ color: "#fff" }}>
          ¡Hola! Soy <span style={{ color: "#7C3AED" }}>Angel Venegas</span>
        </Title>
        <Paragraph
          style={{
            color: "#ccc",
            maxWidth: 700,
            margin: "0 auto 30px",
            fontSize: "17px",
            lineHeight: 1.8,
          }}
        >
          Soy estudiante de cuarto semestre de la carrera de Programación en DuocUC,
          con interés en el desarrollo de software, la resolución de problemas y el aprendizaje continuo.
          Me motiva crear soluciones tecnológicas eficientes y de calidad.
        </Paragraph>

        <div>
          <Button
            type="primary"
            size="large"
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/angel-eleazar-venegas-valladares-07659938b"
            target="_blank"
            style={{
              margin: "0 10px",
              background: "#7C3AED",
              border: "none",
            }}
          >
            LinkedIn
          </Button>
          <Button
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/kaYv-1"
            target="_blank"
            style={{
              margin: "0 10px",
              color: "#fff",
              borderColor: "#7C3AED",
            }}
          >
            GitHub
          </Button>
        </div>
      </motion.section>

      {}
      <motion.section
        id="projects"
        variants={fadeIn}
        style={{
          marginBottom: "160px",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ color: "#fff", marginBottom: "40px" }}>
          Proyectos Destacados
        </Title>
        <Row gutter={[32, 32]} justify="center">
          {[
            {
              title: "Gestor biblioteca",
              desc:"Aplicación web para crear, editar y eliminar tareas. Desarrollada con Python.",
              link: "https://github.com/kaYv-1/Parcial_3/tree/main",
            },
            {
              title: "Urban-Shop",
              desc: "Tienda en línea con carrito y sistema de pagos simulado. Diseño moderno y responsive.",
              link: "https://github.com/kaYv-1/UrbanShop",
            },
            {
              title: "Portafolio Personal",
              desc: "Página web interactiva para mostrar mis proyectos, habilidades y certificaciones.",
              link: "https://github.com/kaYv-1/portfolio/tree/main",
            },
          ].map((project, i) => (
            <Col key={i} xs={24} sm={12} md={8}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  hoverable
                  style={{
                    background: "#1f1f2e",
                    border: "1px solid #2f2f3f",
                    minHeight: 220,
                  }}
                  title={<span style={{ color: "#fff" }}>{project.title}</span>}
                >
                  <Paragraph style={{ color: "#bbb" }}>
                    {project.desc}
                  </Paragraph>
                  <Button
                    type="primary"
                    href={project.link}
                    target="_blank"
                    style={{ background: "#7C3AED", border: "none" }}
                  >
                    Ver en GitHub
                  </Button>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.section>

      {}
      <motion.section
        id="certificates"
        variants={fadeIn}
        style={{
          marginBottom: "160px",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ color: "#fff", marginBottom: "40px" }}>
          Mis Certificados
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {certificados.map((img, i) => (
            <Col key={i} xs={24} sm={12} md={6}>
              <motion.div whileHover={{ scale: 1.08 }}>
                <Card
                  hoverable
                  cover={
                    <img
                      src={img}
                      alt={`Certificado ${i + 1}`}
                      style={{
                        height: "220px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  }
                  style={{
                    background: "#1f1f2e",
                    border: "1px solid #2f2f3f",
                  }}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.section>
    </motion.div>
  );
};

export default Homes;
