from sqlalchemy.orm import Session
from app.models.order import Order
from app.models.cart import Cart
from app.models.product import Product


def create_order(db: Session):

    cart_items = db.query(Cart).all()

    if not cart_items:
        return {"message": "Cart is empty"}

    orders_created = []

    for item in cart_items:

        product = db.query(Product).filter(Product.id == item.product_id).first()

        if product.stock < item.quantity:
            return {"message": f"{product.name} is out of stock"}

        # reduce stock
        product.stock -= item.quantity

        order = Order(
            product_id=item.product_id,
            quantity=item.quantity
        )

        db.add(order)
        orders_created.append(order)

    # clear cart
    db.query(Cart).delete()

    db.commit()

    return {
        "message": "Order placed successfully",
        "orders": orders_created
    }