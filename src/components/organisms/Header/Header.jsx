import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { motion } from "framer-motion";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [selectedKey, setSelectedKey] = useState("home");

  const items = [
    { label: "Inicio", key: "home", href: "#home" },
    { label: "Mis Proyectos", key: "projects", href: "#projects" },
    { label: "Certificados", key: "certificates", href: "#certificates" },
    { label: "Contáctame", key: "contact", href: "#contact" },
  ];

  const handleClick = (key, href) => {
    setSelectedKey(key);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AntHeader
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          background: "rgba(20, 20, 20, 0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          style={{
            display: "flex",
            justifyContent: "center",
            background: "transparent",
          }}
          items={items.map((item) => ({
            key: item.key,
            label: (
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.key, item.href);
                }}
                style={{ color: "#fff", fontSize: 16 }}
              >
                {item.label}
              </a>
            ),
          }))}
        />
      </AntHeader>
    </motion.div>
  );
};

export default Header;
