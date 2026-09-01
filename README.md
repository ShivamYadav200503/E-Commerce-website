# Full Stack E-Commerce Platform

A production-ready full stack e-commerce web application featuring a customer storefront, an administrative dashboard, and a RESTful backend API. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with integrations for Cloudinary, Stripe, and Razorpay.

---

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Key Features](#key-features)
  - [Customer Storefront](#customer-storefront)
  - [Admin Panel](#admin-panel)
  - [Backend API](#backend-api)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation and Setup](#installation-and-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Architecture Overview

The repository is structured into three dedicated packages:

1. **frontend**: Customer-facing single-page application built with React, Vite, and Tailwind CSS.
2. **admin**: Administrative control panel for inventory, product catalog, and order fulfillment.
3. **backend**: Express.js server providing RESTful endpoints, authentication, database operations, and payment handling.

---

## Key Features

### Customer Storefront
- **Product Catalog**: Browse products with search, sorting (price low-to-high, high-to-low), and multi-criteria category filtering.
- **Product Details**: Multi-image preview gallery, size selection, inventory descriptions, and related product recommendations.
- **Shopping Cart**: Client-state synchronized cart with item quantity controls and automatic total calculation.
- **User Authentication**: Secure user registration and login utilizing JSON Web Tokens (JWT) and bcrypt password hashing.
- **Checkout and Payments**:
  - Cash on Delivery (COD)
  - Stripe online card checkout and session verification
  - Razorpay order creation and signature verification
- **Order History**: Real-time order tracking and purchase records for authenticated users.

### Admin Panel
- **Admin Authentication**: Dedicated access control for administrative users.
- **Product Management**: Add new products with multiple image uploads (processed via Multer and uploaded to Cloudinary), categories, pricing, sizes, and bestseller status flags.
- **Catalog Management**: View and remove products from the active catalog.
- **Order Processing**: View incoming orders, inspect ordered items and customer addresses, and update fulfillment statuses (Order Placed, Packing, Shipped, Out for delivery, Delivered).

### Backend API
- **Modular Architecture**: Layered design separating routes, controllers, middleware, and models.
- **Authentication and Authorization**: Role-based access control with JWT verification for both user and admin actions.
- **Image Hosting**: Integration with Cloudinary for asset storage and optimization.
- **Database Persistence**: MongoDB with Mongoose object modeling for users, products, and orders.

---

## Tech Stack

### Frontend & Admin
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Routing**: React Router DOM (v7)
- **HTTP Client**: Axios
- **Notifications**: React Toastify

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB via Mongoose
- **Authentication**: JSON Web Token (jsonwebtoken), bcrypt
- **File Handling**: Multer, Cloudinary SDK
- **Payment Gateways**: Stripe Node SDK, Razorpay SDK
- **Utilities**: dotenv, cors, validator

---

## Project Structure

```text
ecommerce/
├── admin/                  # Admin Dashboard (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Admin UI assets and icons
│   │   ├── components/     # Navbar, Sidebar, Login modal
│   │   ├── pages/          # Add, List, Orders pages
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/                # Backend API (Node.js + Express)
│   ├── config/             # MongoDB and Cloudinary configurations
│   ├── controllers/        # Cart, Order, Product, User handlers
│   ├── middleware/         # Auth, AdminAuth, Multer middlewares
│   ├── models/             # User, Product, Order Mongoose schemas
│   ├── routes/             # API route definitions
│   ├── package.json
│   ├── polyfill.js         # Runtime compatibility polyfills
│   └── server.js           # Server entry point
│
├── frontend/               # Customer Storefront (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Product images, icons, and static data
│   │   ├── components/     # Header, Footer, Hero, SearchBar, etc.
│   │   ├── context/        # ShopContext global state provider
│   │   ├── pages/          # Home, Collection, Product, Cart, etc.
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## Environment Variables

Create `.env` files in their respective directories using the variables outlined below.

### Backend (`backend/.env`)

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### Admin (`admin/.env`)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShivamYadav200503/E-Commerce-website.git
cd E-Commerce-website
```

### 2. Install Dependencies

Install required dependencies for all three sub-projects:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

# Install admin dependencies
cd ../admin
npm install
```

---

## Running the Application

Run each component in a separate terminal window:

### 1. Start the Backend API Server

```bash
cd backend
npm run server
```
Server runs by default on `http://localhost:4000`.

### 2. Start the Frontend Storefront

```bash
cd frontend
npm run dev
```
Storefront runs by default on `http://localhost:5173`.

### 3. Start the Admin Dashboard

```bash
cd admin
npm run dev
```
Admin dashboard runs on the designated Vite local port (e.g., `http://localhost:5174`).

---

## API Endpoints

### User Routes (`/api/user`)
- `POST /register` - Register a new customer account
- `POST /login` - Customer login (returns JWT token)
- `POST /admin` - Admin login (returns admin JWT token)

### Product Routes (`/api/product`)
- `POST /add` - Add a new product with image uploads (Admin auth required)
- `POST /remove` - Remove a product by ID (Admin auth required)
- `POST /single` - Retrieve single product details
- `GET /list` - List all products

### Cart Routes (`/api/cart`)
- `POST /get` - Retrieve authenticated user's cart data (User auth required)
- `POST /add` - Add item to user's cart (User auth required)
- `POST /update` - Update item quantity in cart (User auth required)

### Order Routes (`/api/order`)
- `POST /list` - Retrieve all orders across platform (Admin auth required)
- `POST /status` - Update delivery/order status (Admin auth required)
- `POST /place` - Place order using Cash on Delivery (User auth required)
- `POST /stripe` - Create Stripe checkout session (User auth required)
- `POST /verifyStripe` - Verify Stripe payment completion (User auth required)
- `POST /razorpay` - Create Razorpay order (User auth required)
- `POST /verifyRazorpay` - Verify Razorpay payment signature (User auth required)
- `POST /userorders` - Retrieve authenticated user order history (User auth required)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.