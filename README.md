# Red Estudiantil Frutillar

## Cliente y Problemática

**Cliente:** Organización de Estudiantes de Frutillar.

**Contexto:** La organización representa a estudiantes de la comuna de Frutillar que viajan a diario a Puerto Montt para estudiar, principalmente en jornada vespertina/nocturna. Cuenta con personalidad jurídica, una directiva activa y está en proceso de aprobación de sus estatutos.

**Problemática:** Muchos estudiantes que cursan carreras en Puerto Montt en horario nocturno no cuentan con locomoción para regresar a Frutillar al finalizar sus clases, lo que dificulta la continuidad de sus estudios, especialmente para quienes no pueden costear transporte privado. Además, al ser una organización nueva, necesitan un espacio digital para mantener organizada su información: listado de estudiantes, reuniones, documentos oficiales y beneficios.

---

## Objetivo de la Aplicación

Desarrollar una aplicación web que permita **administrar la información de la organización estudiantil**, mantener informados a sus integrantes y facilitar la comunicación entre la directiva y los estudiantes, centralizando en un solo lugar los datos clave de la red.

---

## Funcionalidades Propuestas

- **Gestión de estudiantes:** registro, búsqueda, edición y eliminación (búsqueda ya implementada en esta versión).
- **Noticias y anuncios** de la organización.
- **Próximas reuniones** con fecha, hora y lugar.
- **Documentos clave:** estatutos, actas y planes de trabajo.
- **Visualización de directiva y nuevos miembros.**
- **Landing page informativa** con diseño moderno (glassmorphism) y resumen general de la organización.

---

## Estructura del Proyecto

```
red-estudiantil-frutillar/
├── public/               # Archivos estáticos públicos
├── src/
│   ├── assets/           # Recursos estáticos (imágenes: hero.png, react.svg, vite.svg)
│   ├── components/       # Componentes React reutilizables
│   │   ├── Navbar.jsx        # Barra de navegación con glassmorphism y botón CTA
│   │   └── EstudianteCard.jsx # Tarjeta para mostrar datos de un estudiante
│   ├── data/             # Datos de ejemplo (mock) que simulan una futura API
│   │   └── mockData.js       # Arreglos: mockEstudiantes, mockNoticias, mockReuniones,
│   │                         # mockDocumentos, mockMiembros
│   ├── pages/            # Vistas principales de la aplicación
│   │   ├── Home.jsx          # Landing page con hero, widgets y estadísticas
│   │   ├── Estudiantes.jsx   # Vista de administración con listado filtrable
│   │   └── Noticias.jsx      # Vista de noticias (en desarrollo)
│   ├── styles/           # Archivos CSS de estilos
│   │   ├── index.css         # Variables CSS globales y estilos base
│   │   ├── App.css           # Estilos generales: layout, navbar, grilla de estudiantes
│   │   └── Home.css          # Estilos específicos de la landing page (hero, widgets, estadísticas)
│   ├── App.jsx           # Componente raíz: maneja la navegación por pestañas con useState
│   └── main.jsx          # Punto de entrada de la aplicación React
├── index.html            # HTML base del proyecto Vite
├── vite.config.js        # Configuración de Vite
├── package.json          # Dependencias y scripts del proyecto
└── README.md             # Este archivo
```

---

## Planificación de Integración Externa

En evaluaciones futuras, la aplicación consumirá información desde una fuente de datos externa mediante **solicitudes HTTP** (por ejemplo, usando `fetch` o `axios`), conectándose a un backend o API REST para sincronizar datos como el listado de estudiantes, reuniones y documentos.

**¿Por qué se necesita?**
Actualmente los datos se gestionan de forma local con arreglos mock (`mockData.js`). Al escalar la organización, editar código directamente cada vez que hay un cambio no es sostenible. Una API permite que la directiva actualice la información desde un panel o base de datos sin necesidad de intervenir el código fuente.

**¿Qué valor aporta?**
- La información siempre estará actualizada para todos los integrantes que accedan a la app.
- Permite separar la lógica de presentación (frontend) de la gestión de datos (backend).
- Facilita futuras funcionalidades como autenticación, roles de usuario y persistencia real de registros.

---

## Uso de Inteligencia Artificial

Durante todo el desarrollo se utilizó **IA (Claude, vía Antigravity IDE)** como asistente de programación en las siguientes tareas:

- **Estructuración inicial del proyecto:** generación de carpetas (`components/`, `pages/`, `data/`, `styles/`) y archivos base.
- **Creación de componentes reutilizables:** `Navbar.jsx`, `EstudianteCard.jsx` y las páginas principales.
- **Implementación de manejo de estado:** uso de `useState` para el filtro de búsqueda de estudiantes y la navegación entre pestañas en `App.jsx`.
- **Diseño visual (UI/UX):** rediseño de la landing page con glassmorphism, gradientes, animaciones CSS y diseño responsive.
- **Documentación:** generación y actualización de este archivo README.

> El detalle de los prompts utilizados se encuentra en la sección **"Prompts Utilizados"** al final de este documento.

---

## Estado Actual del Proyecto

| Funcionalidad | Estado |
|---|---|
| Estructura de carpetas y archivos base | ✅ Completado |
| Navbar con glassmorphism y navegación por estado | ✅ Completado |
| Landing page (Hero, Widgets, Estadísticas) | ✅ Completado |
| Listado de estudiantes con búsqueda en tiempo real | ✅ Completado |
| Datos mock para noticias, reuniones, documentos y miembros | ✅ Completado |
| CRUD completo de estudiantes (agregar, editar, eliminar) | 🔲 Próxima evaluación |
| Persistencia de datos en base de datos | 🔲 Próxima evaluación |
| Integración con API externa (fetch/axios) | 🔲 Próxima evaluación |
| Autenticación de usuarios | 🔲 Próxima evaluación |

---

## Prompts Utilizados
