import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "../src/components/pages/Contact.jsx";

describe("Componente Contact", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    const root = ReactDOM.createRoot(container);
    root.render(<Contact />);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("renderiza el formulario de contacto", () => {
    const form = container.querySelector("form");
    expect(form).not.toBeNull();
  });

  it("tiene campos nombre, correo y mensaje", () => {
    const inputName = container.querySelector('input[placeholder="Tu nombre"]');
    const inputEmail = container.querySelector('input[placeholder="tuemail@ejemplo.com"]');
    const textarea = container.querySelector('textarea');
    expect(inputName).not.toBeNull();
    expect(inputEmail).not.toBeNull();
    expect(textarea).not.toBeNull();
  });

  it("muestra botón 'Enviar mensaje'", () => {
    const btn = Array.from(container.querySelectorAll("button")).find(b =>
      b.textContent.includes("Enviar mensaje")
    );
    expect(btn).not.toBeNull();
  });
});
