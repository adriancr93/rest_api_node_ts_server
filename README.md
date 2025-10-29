# 🚀 REST API Node.js TypeScript Server

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

> A comprehensive REST API server built with Express and TypeScript, following modern development practices and RESTful principles.

## 📋 Table of Contents

- [What is a REST API?](#what-is-a-rest-api)
- [HTTP Verbs](#http-verbs)
- [API Endpoints](#api-endpoints)
- [REST API Advantages](#rest-api-advantages)
- [Development Tools](#development-tools)
- [PERN Stack](#pern-stack)
- [Middleware in Node.js](#middleware-in-nodejs)
- [ORMs in Node.js](#orms-in-nodejs)
- [API Testing Tools](#api-testing-tools)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

// ...existing code...

## ⚡ Express.js

Fast, minimal, and flexible web framework for Node.js.

**Key Features**:
- 🏃‍♂️ **Lightweight**: Unlike Rails or Laravel, no predefined view system
- 🔧 **Flexible**: No built-in ORM or authentication - you control the configuration
- 🎯 **Versatile**: Ideal for monolithic web applications or APIs
- 🔗 **Middleware Support**: Extensive middleware ecosystem for request processing

// ...existing code...

## 🔗 Middleware in Node.js

### What is Middleware?

**Middleware** refers to intermediate software used to process HTTP requests that arrive at a web application before being handled by the main routing function.

Middleware are functions that execute in the middle of the request-response flow of a web application and can perform various tasks such as:
- 🔐 **Authentication**: Verify user credentials
- ✅ **Validation**: Check data integrity and format
- 📝 **Logging**: Record request information
- 🗜️ **Compression**: Compress response data
- 🛡️ **Security**: Add security headers and protections

### 🌟 Key Characteristics

| Feature | Description |
|---------|-------------|
| 🔄 **Sequential Execution** | Each HTTP request passes through a series of middleware before reaching the final controller function |
| 🧩 **Modular Design** | Allows you to modularize and organize code effectively |
| 🔧 **Flexible Configuration** | Add or remove middleware based on your application's needs |
| 🎯 **Single Responsibility** | Each middleware handles a specific concern |

### 🏗️ Middleware Architecture

```typescript
// Basic middleware structure
app.use((req, res, next) => {
  // Middleware logic here
  console.log('Request received at:', new Date().toISOString());
  next(); // Pass control to the next middleware
});
```

### 📦 Common Middleware Types

| Type | Purpose | Example |
|------|---------|---------|
| **Application-level** | Applied to the entire app | `app.use(express.json())` |
| **Router-level** | Applied to specific routes | `router.use('/api', authMiddleware)` |
| **Error-handling** | Handle errors in the pipeline | `app.use(errorHandler)` |
| **Built-in** | Express built-in middleware | `express.static()` |
| **Third-party** | External middleware packages | `cors()`, `helmet()` |

### 🔧 Middleware Example

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Third-party middleware
app.use(cors());
app.use(helmet());

// Custom middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
```

### ✅ Middleware Benefits

- 🎯 **Robust Applications**: Essential for creating flexible and maintainable web applications
- 🔄 **Request Processing**: Systematic processing of HTTP requests
- 🧩 **Code Organization**: Modular approach to handling cross-cutting concerns
- 🔧 **Reusability**: Write once, use across multiple routes
- 🛡️ **Security**: Implement security measures consistently

// ...existing code...