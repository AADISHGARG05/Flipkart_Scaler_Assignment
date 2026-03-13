# 🛒 Flipkart Clone – Fullstack E-Commerce Platform

A full-stack e-commerce web application replicating Flipkart’s UI and core functionality.  
This project was built as part of the **Scaler SDE Intern Fullstack Assignment**.  
The application allows users to browse products, search items, view product details, add items to cart, and place orders.

---

## 🚀 Live Deployment

* **🌐 Frontend (Vercel):** [View Live Site](https://flipkart-scaler-assignment-o6ze-git-main-aadish-s-projects.vercel.app/)
* **⚙️ Backend API (Render):** [API Root](https://flipkart-backend-oc3i.onrender.com/)
* **📘 API Documentation (Swagger):** [Swagger UI](https://flipkart-backend-oc3i.onrender.com/docs)

---

## 📦 Project Architecture

```text
Frontend (Next.js - Vercel)
        │
        ▼
Backend API (FastAPI - Render)
        │
        ▼
Database (PostgreSQL - Render)
```

This architecture ensures a clean separation between frontend, backend, and database layers.

🧑‍💻 Tech Stack
Frontend

Next.js (React Framework)

TailwindCSS

React Icons

Fetch API

Vercel Deployment

Backend

Python

FastAPI

SQLAlchemy ORM

Pydantic

Database

PostgreSQL

Hosted on Render

Deployment

Frontend → Vercel

Backend → Render

Database → Render PostgreSQL

✨ Core Features Implemented
1️⃣ Product Listing Page

Grid layout similar to Flipkart

Product cards with image, price, description, and stock

Category sidebar navigation

Product search functionality

Features:

Dynamic product loading from backend API

Responsive grid layout

Flipkart-style UI design

2️⃣ Product Detail Page

Each product page includes:

Product image

Product name

Product description

Price

Stock availability

Ratings UI

Add to Cart button

3️⃣ Shopping Cart

Users can:

Add products to cart

View cart items

See quantity of each item

Place order from cart page

4️⃣ Order Placement

Order flow:

Product → Add to Cart → View Cart → Place Order

Once order is placed:

Order is stored in database

Cart items are cleared

📊 Database Schema
Product Table
Field	Type
id	Integer
name	String
description	String
price	Float
stock	Integer
category_id	Integer
Cart Table
Field	Type
id	Integer
product_id	Integer
quantity	Integer
Orders Table
Field	Type
id	Integer
created_at	Timestamp
🔌 API Endpoints
Products

GET products

GET /products/

Search products

GET /products/search?q=keyword

Get product by ID

GET /products/{product_id}
Cart

Add to cart

POST /cart/add

View cart

GET /cart/

Remove item

DELETE /cart/remove/{cart_id}
Orders

Create order

POST /orders/create
🖼 UI Design

The UI design closely follows Flipkart’s layout patterns, including:

Header navigation bar

Search bar

Product grid cards

Category sidebar

Product detail layout

Cart page

🧪 Sample Products Seeded

The database is seeded with sample products:

iPhone 15

Levis Jeans

Nike Running Shoes

These are automatically inserted if the database is empty.

⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/Flipkart_Scaler_Assignment.git
2️⃣ Backend Setup

Navigate to backend:

cd backend

Create virtual environment:

python -m venv venv

Activate environment:

Windows

venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Run backend:

uvicorn app.main:app --reload

Backend runs on:

http://127.0.0.1:8000

Swagger docs:

http://127.0.0.1:8000/docs
3️⃣ Frontend Setup

Navigate to frontend:

cd frontend

Install dependencies:

npm install

Run development server:

npm run dev

Frontend runs on:

http://localhost:3000
🔐 Assumptions

As per assignment instructions:

A default user is assumed to be logged in

Authentication system is not implemented

Products are pre-seeded in database

Payment system is not implemented

Focus was on core e-commerce functionality.

📁 Project Structure
Flipkart_Scaler_Assignment
│
├── backend
│   ├── app
│   │   ├── config
│   │   ├── models
│   │   ├── routes
│   │   ├── schemas
│   │   ├── services
│   │   └── main.py
│   └── requirements.txt
│
├── frontend
│   ├── app
│   │   ├── cart
│   │   ├── product
│   │   ├── search
│   │   └── page.js
│   └── components
│
└── README.md
📈 Evaluation Criteria Covered
Criteria	Implementation
Functionality	Product browsing, cart, orders
UI/UX	Flipkart style layout
Database Design	Structured schema with relationships
Code Quality	Modular backend & React components
Code Modularity	Routes, services, schemas separation
🧠 AI Tools Used

AI tools such as ChatGPT were used for:

Debugging

Architecture planning

Code optimization

Documentation writing

All code has been reviewed and understood before submission.

👨‍💻 Author

Aadish Garg

GitHub
https://github.com/AADISHGARG05

LinkedIn
https://www.linkedin.com/in/aadish-garg-ab2a59288/

⭐ Conclusion

This project demonstrates a complete full-stack e-commerce architecture, including:

Modern React frontend

FastAPI backend

PostgreSQL database

Cloud deployment

The system is modular, scalable, and production-ready.
