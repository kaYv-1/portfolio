import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "../src/components/pages/Projects.jsx";

describe("Componente Projects", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<Projects />);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("muestra el título 'Mis Proyectos'", () => {
    expect(container.textContent).toContain("Mis Proyectos");
  });

  it("tiene botones 'Ver en GitHub' (al menos uno)", () => {
    const botones = Array.from(container.querySelectorAll("button")).filter(b =>
      b.textContent.includes("Ver en GitHub")
    );
    expect(botones.length).toBeGreaterThan(0);
  });
});
