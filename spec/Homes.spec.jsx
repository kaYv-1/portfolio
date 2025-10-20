import React from "react";
import ReactDOM from "react-dom/client";
import Homes from "../src/components/pages/Homes.jsx";

describe("Componente Homes", () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<Homes />);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("renderiza el nombre del usuario", () => {
    expect(container.textContent).toContain("Angel Venegas");
  });

  it("tiene enlaces a LinkedIn y GitHub", () => {
    const linkLinkedin = container.querySelector('a[href*="linkedin.com"]');
    const linkGithub = container.querySelector('a[href*="github.com"]');
    expect(linkLinkedin).not.toBeNull();
    expect(linkGithub).not.toBeNull();
  });

  it("muestra al menos una tarjeta de proyecto (ant-card)", () => {
    const cards = container.querySelectorAll(".ant-card");
    expect(cards.length).toBeGreaterThan(0);
  });
});
