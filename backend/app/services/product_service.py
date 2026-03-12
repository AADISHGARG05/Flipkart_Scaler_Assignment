from sqlalchemy.orm import Session
from app.models.product import Product


def get_products(db: Session):
    return db.query(Product).all()


def get_product_by_id(db: Session, product_id: int):
    return db.query(Product).filter(Product.id == product_id).first()


def search_products(db: Session, keyword: str):
    return db.query(Product).filter(Product.name.contains(keyword)).all()

def get_products_by_category(db, category_id):
    from app.models.product import Product
    return db.query(Product).filter(Product.category_id == category_id).all()