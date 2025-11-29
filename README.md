# 🛍️ Product Management REST API

A REST API for managing products using Node.js backend built using **Express**, **MongoDB**,
**Mongoose**, and **Joi validation**, following a clean layered architecture (Controller → Service).

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Joi-008080?style=for-the-badge&logo=joomla&logoColor=white" />
  <img src="https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=yellow" />
  <img src="https://img.shields.io/badge/prettier-000000?style=for-the-badge&logo=prettier&logoColor=purple" />
  <img src="https://img.shields.io/badge/Swagger-000000?style=for-the-badge&logo=swagger&logoColor=green" />
</div>

---

## 📌 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#requestresponse-examples)
- [Error Handling](#error-handling)
- [Validation Rules](#validation-rules)
- [Postman Collection](#postman-collection)
- [Swagger Documentation](#swagger-documentation)

---

## 📌 Overview

This REST API allows users to perform CRUD operations on products.  
It is built with production-grade architecture, includes validation, error handling, and reusable
utility classes.

---

## ✨ Features

✅ Create a Product  
✅ Get All Products  
✅ Get a Product by ID  
✅ Update a Product  
✅ Delete a Product  
✅ Joi Validation Middleware  
✅ Layered Architecture (Controller → Service)  
✅ Global Error Handling Middleware  
✅ Async Handler Wrapper  
✅ ApiError & ApiResponse Utility Classes  
✅ Clean Folder Structure  
✅ Swagger Documentation (YAML)

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Joi Validation**
- **dotenv**
- **Nodemon** (for development)
- **http-status-codes** (for consistent status code constants)
- **Prettier** (for code formatting)

---

## 📁 Project Structure

```plaintext
app/
├─ config/
│  └─ config.js
├─ db/
│  └─ db.js
├─ controllers/
│  └─ product.controller.js
├─ services/
│  └─ product.service.js
├─ models/
│  └─ product.model.js
├─ validations/
│  └─ product.validation.js
├─ middlewares/
│  ├─ 404.middleware.js
│  ├─ errorHandler.middleware.js
│  └─ validation.middleware.js
├─ utils/
│  ├─ apiError.utils.js
│  ├─ apiResponse.utils.js
│  └─ asyncHandler.utils.js
├─ routes/
│  └─ product.routes.js
└─ app.js
main.js
docs/
└─ swagger.yaml
package.json
package-lock.json
README.md
.env
.gitignore
.prettierrc
.prettierignore

```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
PORT=5000
DATABASE_URI=mongodb://localhost:27017
DATABASE_NAME=products
NODE_ENV=development
```

---

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
    cd 01-Product-CRUD-API
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:5000` by default.

---

## 🎯 Available Scripts

In the project directory, you can run:

```bash
npm dev
npm start
```

- `npm dev`: Runs the app in development mode with nodemon.
- `npm start`: Runs the app in production mode.

---

## 🚀 API Endpoints

### Product Endpoints

- `POST /api/products` - Create a new product
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a product by ID
- `PUT /api/products/:id` - Update a product by ID
- `DELETE /api/products/:id` - Delete a product by ID

---

## 📄 Request/Response Examples

### Create Product

**Request:**

```http
POST /api/products HTTP/1.1
Content-Type: application/json
{
  "name": "Sample Product",
  "description": "This is a sample product.",
  "price": 200,
  "category": "Electronics",
  "inStock": true
}
```

**Response:**

```http
HTTP/1.1 201 Created
Content-Type: application/json
{
  "success": true,
  "data": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 200,
    "category": "Electronics",
    "inStock": true,
    "createdAt": "2024-06-01T12:00:00.000Z",
    "updatedAt": "2024-06-01T12:00:00.000Z"
  }
}


```

### Get All Products

**Request:**

```http
GET /api/products HTTP/1.1
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "success": true,
  "data": [
    {
      "_id": "60c72b2f9b1d8e001c8e4b8a",
      "name": "Sample Product",
      "description": "This is a sample product.",
      "price": 200,
      "category": "Electronics",
      "inStock": true,
      "createdAt": "2024-06-01T12:00:00.000Z",
      "updatedAt": "2024-06-01T12:00:00.000Z"
    },
    {
      "_id": "60c72b2f9b1d8e001c8e4b8b",
      "name": "Another Product",
      "description": "This is another product.",
      "price": 5499,
      "category": "Clothing",
      "inStock": false,
      "createdAt": "2024-06-01T12:00:00.000Z",
      "updatedAt": "2024-06-01T12:00:00.000Z"
    }
    ...
  ]
}
```

### Get Product by ID

**Request:**

```http
GET /api/products/60c72b2f9b1d8e001c8e4b8a HTTP/1.1
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "success": true,
  "data": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 499,
    "category": "Electronics",
    "inStock": true,
    "createdAt": "2024-06-01T12:00:00.000Z",
    "updatedAt": "2024-06-01T12:00:00.000Z"
  }
}
```

### Update Product

**Request:**

```http
PUT /api/products/60c72b2f9b1d8e001c8e4b8a HTTP/1.1
Content-Type: application/json
{
  "price": 499,
  "inStock": false
}
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "success": true,
  "data": {
    "_id": "60c72b2f9b1d8e001c8e4b8a",
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 499,
    "category": "Electronics",
    "inStock": false,
    "createdAt": "2024-06-01T12:00:00.000Z",
    "updatedAt": "2024-06-01T12:30:00.000Z"
  }
}
```

### Delete Product

**Request:**

```http
DELETE /api/products/60c72b2f9b1d8e001c8e4b8a HTTP/1.1
```

**Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json
{
  "success": true,
  "message": "Product deleted successfully."
  "data": null
}
```

---

## ❗ Error Handling

The API uses a centralized error handling middleware to catch and respond to errors consistently.
Errors are returned in the following format:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
  "success": false,
  "message": "Validation error: 'name' is required."
  stack: "Error stack trace here" (in development mode only)
}
```

---

## 📝 Validation Rules

The API uses Joi for validation. The validation rules are defined in the `product.validation.js`
file.

- `name`: Required, string, min length 3, max length 100
- `description`: Optional, string, max length 500
- `price`: Required, number, min 0, max 1000
- `category`: Required, string,
- `inStock`: Optional, boolean

---

## 📬 Postman Collection

A Postman collection is provided in the `postman/ProductManagementCRUD.json` file.
You can download this file and import it into Postman to easily test the API endpoints. You can
import this collection into Postman to quickly access and test all the available API routes.

## 👉 **[Download Postman Collection](./postman/ProductManagementCRUD.json)**
---

## 📚 Swagger Documentation

The API is documented using Swagger (OpenAPI Specification). You can find the Swagger YAML file at
`docs/swagger.yaml`.

## SWAGGER DOCUMENTATION INCLUDES:

- Detailed information about each API endpoint
- Request and response examples
- Error responses

## 👉 **[Swagger Documentation](./docs/swagger.yaml)**

---
