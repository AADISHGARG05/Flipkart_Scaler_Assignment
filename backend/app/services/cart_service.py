from sqlalchemy.orm import Session
from app.models.cart import Cart


def add_to_cart(db: Session, product_id: int, quantity: int):
    cart_item = Cart(product_id=product_id, quantity=quantity)
    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)
    return cart_item


def get_cart(db: Session):
    return db.query(Cart).all()


def remove_cart_item(db: Session, cart_id: int):
    item = db.query(Cart).filter(Cart.id == cart_id).first()
    if item:
        db.delete(item)
        db.commit()
    return {"message": "Item removed"}