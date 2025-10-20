import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { useLocation, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: "/", label: "Inicio" },
  { key: "/projects", label: "Mis Proyectos" },
  { key: "/contact", label: "Contáctame" },
];

const MainLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #0e0e10 0%, #151527 45%, #0e0e10 100%)",
      }}
    >
      {/* HEADER */}
      <Header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          height: "70px",
          background: scrolled
            ? "rgba(20, 20, 35, 0.9)"
            : "rgba(20, 20, 35, 0.6)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          transition: "all 0.3s ease",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            color:
              location.pathname === "/"
                ? "#b794f6"
                : "rgba(235,235,235,0.85)",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#b794f6")}
          onMouseLeave={(e) =>
            (e.target.style.color =
              location.pathname === "/"
                ? "#b794f6"
                : "rgba(235,235,235,0.85)")
          }
        >
          Mi Portafolio
        </Link>

        {/* NAV */}
        <nav style={{ display: "flex", gap: "2.5rem" }}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              to={item.key}
              style={{
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: location.pathname === item.key ? "600" : "500",
                color:
                  location.pathname === item.key
                    ? "#b794f6"
                    : "rgba(230,230,230,0.85)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#b794f6";
                e.target.style.textShadow =
                  "0px 0px 6px rgba(183,148,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  location.pathname === item.key
                    ? "#b794f6"
                    : "rgba(230,230,230,0.85)";
                e.target.style.textShadow = "none";
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Header>

      {/* CONTENT */}
      <Content
        style={{
          padding: "120px 80px 80px 80px",
          background:
            "linear-gradient(180deg, #101018 0%, #1a1630 50%, #0e0e10 100%)",
          fontFamily: "'Inter', sans-serif",
          color: "#eaeaea",
        }}
      >
        {children}
      </Content>

      {/* FOOTER */}
      <Footer
        style={{
          textAlign: "center",
          color: "#999",
          background:
            "linear-gradient(180deg, #151527 0%, #0f0f15 80%, #0e0e10 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          padding: "40px 0",
        }}
      >
        © {new Date().getFullYear()} — Mi Portafolio
      </Footer>
    </Layout>
  );
};

export default MainLayout;
