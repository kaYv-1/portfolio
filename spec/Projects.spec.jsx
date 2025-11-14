import React from "react";
import ReactDOM from "react-dom/client";
import Projects from "../src/components/pages/Projects.jsx";

describe("Componente Projects", () => {
  let container;

  beforeEach(async () => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<Projects />);
    await new Promise((r) => setTimeout(r, 50));
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("muestra el título 'Mis Proyectos'", () => {
    expect(container.textContent).toContain("Mis Proyectos");
  });

  it("tiene botones 'Ver en GitHub' (al menos uno)", () => {
    const candidates = Array.from(container.querySelectorAll("button, a, [role='button']")).filter(el =>
      el.textContent.includes("Ver en GitHub")
    );
    expect(candidates.length).toBeGreaterThan(0);
  });
});
