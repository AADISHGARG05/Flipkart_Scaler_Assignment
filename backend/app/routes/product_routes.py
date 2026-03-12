from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.config.database import get_db
from app.models.product import Product   # IMPORTANT IMPORT

router = APIRouter(prefix="/products", tags=["Products"])


# GET ALL PRODUCTS
@router.get("/")
def get_products(db: Session = Depends(get_db)):
    return db.query(Product).all()


# SEARCH PRODUCTS
@router.get("/search")
def search_products(q: str, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.name.ilike(f"%{q}%")).all()


# GET PRODUCT BY ID
@router.get("/{product_id}")
def get_product(product_id: int, db: Session = Depends(get_db)):
    return db.query(Product).filter(Product.id == product_id).first()