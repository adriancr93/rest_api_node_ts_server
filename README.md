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
- [PUT vs PATCH](#put-vs-patch-when-to-use-each)
- [Testing](#testing)
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
- 🔗 **Middleware Support**: Extensive middleware ecosystem for request processing

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

## 🔄 PUT vs PATCH: When to Use Each

### 🔧 What does PUT do?

The **PUT** method is used to **update or completely replace** an existing resource on a web server.

When you make a PUT request, you're telling the server to take the provided information and use it to completely replace the resource at the specified location.

**Example**: If you have a JSON object representing a product and make a PUT request to the server with that object, the server will completely replace the existing product data with the data provided in the PUT request.

```typescript
// PUT Example - Complete replacement
PUT /api/products/123
{
  "id": 123,
  "name": "Updated Product Name",
  "price": 29.99,
  "description": "Completely new description",
  "category": "electronics",
  "availability": true
}
```

### 🎯 What does PATCH do?

The **PATCH** method is used to perform **partial modifications** to an existing resource on a web server.

Instead of completely replacing the resource like PUT does, PATCH allows you to make specific changes to the resource data without affecting the rest of the information.

**Example**: If you have a JSON object representing a product and make a PATCH request to the server with a small part of the updated data (for example, changing only availability), the server will apply those changes without affecting other product details.

```typescript
// PATCH Example - Partial update
PATCH /api/products/123
{
  "availability": false
}
```

### 📊 PUT vs PATCH Comparison

| Method | Purpose | Data Sent | Result |
|--------|---------|-----------|---------|
| **PUT** | Complete replacement | Full resource object | Replaces entire resource |
| **PATCH** | Partial modification | Only changed fields | Updates specific fields only |

### 🎯 When to Use Each

| Scenario | Recommended Method | Why? |
|----------|-------------------|------|
| **Full form submission** | PUT | User submits complete form with all fields |
| **Toggle status** | PATCH | Only changing availability/status flag |
| **Update profile** | PUT | Replacing entire user profile |
| **Change password** | PATCH | Only updating password field |
| **Bulk update** | PUT | Replacing multiple fields at once |
| **Increment counter** | PATCH | Only updating count value |

### 🔍 Implementation Examples

```typescript
// PUT - Complete Update
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const userData = req.body; // Complete user object
  
  const updatedUser = await User.findByIdAndUpdate(id, userData, {
    new: true,
    overwrite: true // Complete replacement
  });
  
  res.json(updatedUser);
});

// PATCH - Partial Update
app.patch('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Only fields to update
  
  const updatedUser = await User.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true
  });
  
  res.json(updatedUser);
});
```

### 📋 Conclusion

| Method | Action | Use Case |
|--------|--------|----------|
| **PUT** | **Update** | Complete resource replacement |
| **PATCH** | **Modify** | Partial resource modification |

**Best Practice**: Use PATCH for most update operations as it's more efficient and follows the principle of sending only necessary data over the network.

## 🧪 Testing

### 🎯 Jest and Supertest

**Testing in APIs**

Writing tests for our APIs is not very different from applying testing to React applications.

Just because our API is built with TypeScript doesn't mean we won't add tests. Tests should always be there, and in many jobs, your code must be accompanied by a series of tests.

### 📋 Types of Testing in Node.js and APIs

| Test Type | Purpose | Focus |
|-----------|---------|-------|
| **🔬 Unit Testing** | Verify that individual parts of our code work | Creating the server, visiting a route - we must check that each piece works as expected before integrating it with others |
| **🔗 Integration Testing** | Once we verify that some pieces of code work on their own, it's time to check when 2 or more come together | Visiting a route and getting data, or sending a POST request, validate, and then create the product |

### ⚡ Jest

#### What is Jest?

**Jest** is one of the most well-known testing frameworks today. It works with TypeScript, Node.js, React, Angular, and Vue.js.

**Key Features**:
- ⚙️ **Simple Configuration**: Easy setup and configuration
- 🔄 **Isolated Tests**: Tests run separately and don't mix with existing code
- 🌍 **Universal**: Compatible with multiple frameworks and languages
- 📊 **Built-in Assertions**: Rich assertion library included

### 🔍 Supertest

#### What is Supertest?

**Jest** gives us a series of functions to test code, but with **Supertest** we can make requests to our API and verify that the code works as we expect.

**Key Features**:
- 🌐 **HTTP Testing**: Make HTTP requests to your API endpoints
- 🔗 **Integration Tests**: Test integration between API URLs and ORM
- 🎯 **Assertion Support**: Built-in assertions for response testing
- ⚡ **Fast Execution**: Lightweight and fast test execution

### 🔧 Testing Setup Example

```typescript
// test/app.test.ts
import request from 'supertest';
import app from '../src/app';

describe('API Endpoints', () => {
  // Unit Test Example
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);
      
      expect(response.body).toHaveProperty('status', 'OK');
    });
  });

  // Integration Test Example
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com'
      };

      const response = await request(app)
        .post('/api/users')
        .send(userData)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(userData.name);
      expect(response.body.email).toBe(userData.email);
    });
  });
});
```

### 📦 Installation

```bash
# Install Jest and Supertest
npm install --save-dev jest @types/jest supertest @types/supertest

# Install TypeScript support for Jest
npm install --save-dev ts-jest typescript
```

### ⚙️ Jest Configuration

```json
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
};
```

### 🚀 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### ✅ Testing Best Practices

| Practice | Description |
|----------|-------------|
| 🎯 **Test Isolation** | Each test should be independent and not rely on others |
| 📝 **Descriptive Names** | Use clear, descriptive test names that explain what is being tested |
| 🔄 **Setup/Teardown** | Use beforeEach/afterEach for test setup and cleanup |
| 📊 **Code Coverage** | Aim for high code coverage but focus on quality over quantity |
| 🔍 **Edge Cases** | Test both happy paths and error conditions |

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

⭐ **Star this repo if you find it helpful!**

### 📦 Installation

```bash
# Install Jest and Supertest
npm install --save-dev jest @types/jest supertest @types/supertest

# Install TypeScript support for Jest
npm install --save-dev ts-jest typescript

# Alternative installation (all in one command)
npm i -D supertest @types/supertest jest @types/jest ts-jest

# Initialize TypeScript Jest configuration
npx ts-jest config:init
```

### ⚙️ Jest Configuration

```json
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/test'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
};
```

### 📁 Jest File Extensions

**Jest** can read test files in 3 different ways:

| Extension/Location | Example | Description |
|--------------------|---------|-------------|
| **`.test.js/.test.ts`** | `user.test.ts` | Files with `.test` extension |
| **`.spec.js/.spec.ts`** | `user.spec.ts` | Files with `.spec` extension |
| **`__tests__` folder** | `__tests__/user.ts` | Files inside `__tests__` directory |

### 📂 Recommended Test Structure

```
src/
├── controllers/
│   └── userController.ts
├── models/
│   └── User.ts
└── routes/
    └── userRoutes.ts

tests/
├── __tests__/
│   ├── controllers/
│   │   └── userController.test.ts
│   └── models/
│       └── User.test.ts
├── integration/
│   └── userRoutes.spec.ts
└── setup/
    └── testSetup.ts
```

### 🔧 Jest Extensions for VS Code

**Recommended VS Code Extensions**:

| Extension | Purpose | Features |
|-----------|---------|----------|
| **Jest** | Test runner integration | Run tests from VS Code, test results in sidebar |
| **Jest Runner** | Individual test execution | Run single tests or test suites |
| **Jest Snippets** | Code snippets | Quick test templates and assertions |

```bash
# Install Jest VS Code extensions
# Search in VS Code Extensions:
# - Jest (by Orta)
# - Jest Runner (by firsttris)
# - Jest Snippets (by andys8)
```

### 🎯 Test File Examples

```typescript
// users.test.ts - Unit Test
describe('User Model', () => {
  test('should create a new user', () => {
    const user = new User('John', 'john@example.com');
    expect(user.name).toBe('John');
    expect(user.email).toBe('john@example.com');
  });
});

// users.spec.ts - Integration Test
describe('User API', () => {
  test('POST /api/users should create user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'John', email: 'john@example.com' })
      .expect(201);
    
    expect(response.body).toHaveProperty('id');
  });
});

// __tests__/userService.ts - Service Test
describe('UserService', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  test('should validate user email', () => {
    const isValid = UserService.validateEmail('test@example.com');
    expect(isValid).toBe(true);
  });
});
```
## 📊 Code Coverage

### What is Code Coverage?

**Code Coverage** is a metric used to measure the amount of source code that has been executed or covered by a test suite.

In other words, it measures what percentage of a program's code has been tested. The higher the code coverage, the more comprehensive the tests are, which is often considered a positive indicator of software quality.

### 📈 Coverage Metrics

| Coverage Level | Status | Description |
|----------------|--------|-------------|
| **< 60%** | ❌ **Not Sufficient** | Inadequate test coverage |
| **60% - 80%** | ⚠️ **Can Be Improved** | Moderate coverage, room for improvement |
| **>= 80%** | ✅ **Good Coverage** | Sufficient and good measure |
| **100%** | 🎯 **Perfect (Rare)** | Complete coverage, rarely achievable in practice |

### 🔧 Setting Up Code Coverage

````typescript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
    '!src/index.ts',
    '!src/**/*.test.{ts,js}'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
````

# Run tests with coverage
npm run test:coverage

# Alternative command
npx jest --coverage

# Generate HTML coverage report
npm run test:coverage -- --coverageReporters=html

# Watch mode with coverage
npm run test:watch -- --coverage

### 🎯  Package.json Scripts
```
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:coverage:watch": "jest --coverage --watch",
    "test:ci": "jest --coverage --ci --watchAll=false"
  }
}
```