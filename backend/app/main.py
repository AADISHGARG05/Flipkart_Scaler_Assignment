from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config.database import Base, engine

# Import ALL models before create_all
from app.models.product import Product
from app.models.category import Category
from app.models.cart import Cart
from app.models.order import Order
from app.routes import category_routes

from app.routes import product_routes, cart_routes, order_routes

app = FastAPI()

# create tables
Base.metadata.create_all(bind=engine)

from sqlalchemy.orm import Session
from app.config.database import SessionLocal
from app.models.product import Product

db = SessionLocal()

# check if products exist
if db.query(Product).count() == 0:
    p1 = Product(
        name="iPhone 15",
        description="Apple smartphone",
        price=79999,
        stock=10
    )

    p2 = Product(
        name="Levis Jeans",
        description="Men blue denim jeans",
        price=2999,
        stock=20
    )

    p3 = Product(
        name="Nike Shoes",
        description="Running shoes",
        price=4999,
        stock=15
    )

    db.add_all([p1, p2, p3])
    db.commit()

db.close()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://flipkart-scaler-assignment-o6ze-1nzxsho9-aadish-s-projects.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(product_routes.router)
app.include_router(cart_routes.router)
app.include_router(order_routes.router)
app.include_router(category_routes.router)

@app.get("/")
def root():
    return {"message": "Flipkart Clone API"}