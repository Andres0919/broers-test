# 🧩 PokéApp – Broers test

¡Bienvenido a **PokéApp**!  
Una aplicación web moderna y responsive construida con **React 19**, **Vite**, **Ant Design** y datos de la **[PokeAPI](https://pokeapi.co)**.

---

## 🌍 Demo en Producción

🔗 Accede a la aplicación en línea:  
**[https://broers-andres-posada.netlify.app](https://broers-andres-posada.netlify.app)**

---

## 🎯 ¿Qué es PokéApp?

PokéApp te permite:

- 🔐 Iniciar sesión con validación de formulario y captcha.
- 🔍 **Explorar Pokémon** de manera sencilla y visual.
- 📄 Ver **detalles completos** de cada criatura: tipo, habilidades, altura, peso y movimientos.
- 🔄 Navegar con una interfaz moderna, atractiva y responsiva.

---

## 🔐 Autenticación

La aplicación cuenta con una página de **Login** moderna y segura que incluye:

- Validación de campos obligatorios (usuario y contraseña).
- Integración con **Google reCAPTCHA** para evitar accesos automatizados.
- Mensajes de error amigables y navegación automática al Home al iniciar sesión correctamente.

---

## 🛠️ Tecnologías Usadas

- ⚛️ **React 19** + **Vite** – Renderizado rápido y moderno
- 🧩 **Ant Design** – UI elegante y profesional
- 🔐 **Google reCAPTCHA** – Protección contra bots
- 🌐 **Axios** – Cliente HTTP para consumir la PokeAPI
- 📦 **pnpm** – Manejo rápido de paquetes
- 💬 **SweetAlert2** – Alertas modernas y estilizadas para mejorar la experiencia de usuario

---

## 📦 Variables de Entorno

La aplicación requiere la configuración de variables de entorno para funcionar correctamente.

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
VITE_RECAPTCHA_SITE_KEY=
```

---

## 🚀 Instalación

```bash
pnpm install
pnpm dev
```
