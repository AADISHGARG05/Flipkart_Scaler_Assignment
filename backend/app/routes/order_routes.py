from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.config.database import get_db
from app.services.order_service import create_order

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)

@router.post("/create")
def create(db: Session = Depends(get_db)):
    return create_order(db)