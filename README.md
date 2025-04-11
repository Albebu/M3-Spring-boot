# Proyecto Full Stack – API Vueling Monlau

Este proyecto es una aplicación web full stack compuesta por un **frontend desarrollado en React 19 (JSX)** utilizando Vite, y un **backend en Spring Boot 3.4.4** que expone una API REST y se conecta a una base de datos MySQL mediante JPA.

## Estructura del Proyecto

/frontend/ → Aplicación React 19 (JSX) con Vite
/backend/ → API REST desarrollada con Spring Boot y Maven

## 🔧 Tecnologías utilizadas

### Backend
- Java 21
- Spring Boot 3.4.4
- Spring Web
- Spring Data JPA
- MySQL Driver
- Lombok
- Maven

### Frontend
- React 19
- JSX
- Vite
- Eslint
- React DOM
- TypeScript (tipados opcionales mediante `@types/*`)

---

## ⚙️ Configuración del proyecto

### 1. Backend – Spring Boot

#### Requisitos:
- Java 21
- Maven
- MySQL

#### Instalación y ejecución:
1. Iniciar el backend con el IDE de preferencia.
Archivo pom.xml – Dependencias principales:
spring-boot-starter-data-jpa

spring-boot-starter-web

mysql-connector-j

lombok

spring-boot-devtools

spring-boot-starter-test
2. Frontend – React 19 (JSX con Vite)
Requisitos:
Node.js 18+
React 19

Instalación y ejecución:
cd frontend
npm install
npm run dev

Scripts disponibles:
"dev": "vite",                // Ejecuta el servidor en desarrollo
"build": "vite build",        // Genera la versión de producción
"preview": "vite preview",    // Previsualiza la build
"lint": "eslint ."            // Linter de código

🔄 Comunicación entre frontend y backend
Por defecto, la API backend debería estar corriendo en http://localhost:8080 y el frontend en http://localhost:5173. Los CORS están habilitados para localhost:5173, configurarlo para el puerto que hace falta.s

/frontend/package.json – configuración del proyecto React

/backend/pom.xml – configuración del proyecto Spring Boot y Maven

.gitignore – para ignorar artefactos innecesarios en Git

