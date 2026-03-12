from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.schemas.cart_schema import CartCreate
from app.services.cart_service import add_to_cart, get_cart, remove_cart_item

router = APIRouter(prefix="/cart", tags=["Cart"])


@router.post("/add")
def add_item(cart: CartCreate, db: Session = Depends(get_db)):
    return add_to_cart(db, cart.product_id, cart.quantity)


@router.get("/")
def view_cart(db: Session = Depends(get_db)):
    return get_cart(db)


@router.delete("/remove/{cart_id}")
def delete_item(cart_id: int, db: Session = Depends(get_db)):
    return remove_cart_item(db, cart_id)