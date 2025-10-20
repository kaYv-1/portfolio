import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "../src/components/layouts/MainLayout.jsx";

describe("Componente MainLayout", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(
      <MemoryRouter>
        <MainLayout>
          <div>Contenido de prueba</div>
        </MainLayout>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("muestra el texto 'Mi Portafolio'", () => {
    expect(container.textContent).toContain("Mi Portafolio");
  });

  it("tiene enlaces de navegación", () => {
    const links = container.querySelectorAll("a");
    expect(links.length).toBeGreaterThan(0);
  });
});
