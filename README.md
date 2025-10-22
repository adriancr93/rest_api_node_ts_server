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
- [ORMs in Node.js](#orms-in-nodejs)
- [API Testing Tools](#api-testing-tools)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## 🤔 What is a REST API?

A REST API is a set of rules that allows applications to communicate with each other over the web.

> **REST** = **Representational State Transfer**

### Key Characteristics:
- 🌐 Can be designed in any language that runs over HTTP
- 📡 Must respond to HTTP requests: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
- 📊 Provides an ordered and structured way to make database resources available
- 🏗️ Follows architectural constraints for scalable web services

## 🔧 HTTP Verbs

REST APIs must respond to the following HTTP request methods:

| Verb | Purpose | Description |
|------|---------|-------------|
| `GET` | 📖 Retrieve Data | Fetch information from the server |
| `POST` | 📝 Create Data | Send data to create new resources |
| `PUT/PATCH` | ✏️ Update Data | Modify existing resources |
| `DELETE` | 🗑️ Remove Data | Delete resources from the server |

## 🛣️ API Endpoints

A REST API includes endpoints (URLs) to perform CRUD operations:

```http
GET    /clients     # List all clients
GET    /clients/10  # Get a specific client
POST   /clients     # Create a new client
PUT    /clients/3   # Update a client
DELETE /clients/8   # Delete a client
```

## ✅ REST API Advantages

- 🎯 **Simplicity**: Easy to create and understand
- 📈 **Scalability**: Organized and scalable project structure  
- 🔌 **Versatility**: Can be consumed by React, Angular, Vue.js, Flutter, Kotlin, Swift, etc.
- 🌐 **Language Agnostic**: Works with any HTTP-capable technology
- 📱 **Cross-Platform**: Supports web, mobile, and desktop applications

## 🛠️ Development Tools

### Languages & Frameworks
Any server-side programming language can create REST APIs:
- **Languages**: Python, PHP, Java, C#, JavaScript/TypeScript
- **Frameworks**: Laravel, Express, Rails, Django, FastAPI
- **Databases**: MySQL, PostgreSQL, MongoDB

## 🏗️ PERN Stack

> **PERN** = **PostgreSQL** + **Express** + **React** + **Node.js**

### What is PERN Stack?

A **stack** is a collection of tools used to create an application. **Full Stack** means you can create the complete application stack, and PERN enables you to do exactly that.

- 🎨 **Frontend**: React for dynamic user interfaces
- 🔧 **Backend**: Node.js with Express for server-side logic
- 🗄️ **Database**: PostgreSQL for robust data management

> 💡 **Note**: React can work with backends built in Django, Rails, Laravel, etc.

### 🐘 PostgreSQL

PostgreSQL (also called Postgres) is an open-source, object-oriented relational database management system.

**ORM Integration**: Interact with databases through Object-Relational Mapping tools that provide methods to create, retrieve, update, and delete data.

### ⚡ Express.js

Fast, minimal, and flexible web framework for Node.js.

**Key Features**:
- 🏃‍♂️ **Lightweight**: Unlike Rails or Laravel, no predefined view system
- 🔧 **Flexible**: No built-in ORM or authentication - you control the configuration
- 🎯 **Versatile**: Ideal for monolithic web applications or APIs

### 🟢 Node.js

JavaScript runtime environment that executes on the server.

**Advantages**:
- 📦 **NPM Ecosystem**: Vast library of packages available
- 🔌 **Full-Featured**: Database queries, user authentication, routing, and more
- 🚀 **Performance**: Non-blocking, event-driven architecture

## 🌟 PERN/MERN Stack Benefits

- 🔄 **Separation of Concerns**: Clear backend and frontend separation
- 📡 **JSON Communication**: Backend and frontend communicate via JSON and HTTP requests
- 📦 **Rich Ecosystem**: NPM provides extensive dependencies
- 🎯 **Single Language**: Use only JavaScript/TypeScript for full-stack development

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/adriancr93/rest_api_node_ts_server.git

# Navigate to project directory
cd rest_api_node_ts_server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run the development server
npm run dev
```

## 📖 Usage

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run tests
npm test
```

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api/v1
```

### Example Endpoints

```http
# Get all users
GET /api/v1/users

# Get user by ID
GET /api/v1/users/:id

# Create new user
POST /api/v1/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}

# Update user
PUT /api/v1/users/:id
Content-Type: application/json

{
  "name": "John Smith"
}

# Delete user
DELETE /api/v1/users/:id
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Adrian Obregon**

- GitHub: [@adriancr93](https://github.com/adriancr93)
- Repository: [rest_api_node_ts_server](https://github.com/adriancr93/rest_api_node_ts_server)

---

## 🗄️ ORMs in Node.js

### What is an ORM?

An **ORM (Object-Relational Mapping)** simplifies communication between a database and your application code.

Instead of writing SQL queries, you write functions that are similar to the code you already write.

### 🌟 ORM Advantages

| Feature | Description |
|---------|-------------|
| 🎯 **Abstraction** | Interact with databases using objects, classes, and methods instead of complex SQL queries |
| 🔄 **Portability** | Switch between database management systems without rewriting your code |
| 🚀 **Productivity** | Handles repetitive tasks like SQL query generation, letting you focus on application logic |

### 🤔 Considerations When Choosing an ORM

- ✅ **Active Development**: Choose ORMs that are actively maintained
- 🔒 **Validation**: ORMs help secure data input, but always validate user input
- 🔧 **Migration Complexity**: Switching ORMs can be challenging - choose carefully before starting a project

### 📚 Popular Node.js ORMs

| ORM | Best For | Features |
|-----|----------|----------|
| **Mongoose** | MongoDB | Schema validation, middleware, plugins |
| **Prisma** | Modern TypeScript | Type safety, auto-generated client, migrations |
| **Sequelize** | SQL Databases | Multi-database support, associations, transactions |
| **TypeORM** | TypeScript | Decorators, Active Record/Data Mapper patterns |

### 🔧 Sequelize ORM

**Sequelize** is a popular ORM that supports TypeScript and multiple databases:

- **Supported Databases**: Oracle, PostgreSQL, MySQL, MariaDB, SQLite, SQL Server
- **Features**: Data relationships, lazy loading, eager loading, transactions, migrations
- **TypeScript Support**: Full type safety and IntelliSense support

#### Example Usage:

```typescript
import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING
});

// Create a new user
const user = await User.create({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com'
});
```

## 🧪 API Testing Tools

For testing and verifying API endpoints, use these popular tools:

### 🌩️ Thunder Client
- **VS Code Extension**: Built-in API testing within your editor
- **Features**: Collections, environments, scripting support
- **Lightweight**: No additional software installation required

### 📮 Postman
- **Standalone Application**: Comprehensive API development platform
- **Features**: Advanced testing, mock servers, API documentation
- **Collaboration**: Team workspaces and sharing capabilities

### 🔧 Additional Testing Options
- **cURL**: Command-line tool for HTTP requests
- **Insomnia**: Elegant REST client with GraphQL support
- **HTTPie**: User-friendly command-line HTTP client

---

⭐ **Star this repo if you find it helpful!** 