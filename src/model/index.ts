export interface Item  {
  id: string,
  productName: string,
  description: string,
  unitPrice: number
  imageUrl:  string;
  category: string;
}

export interface CartItemProps extends Item {
    quantity:number,
    onChangeQuantity?: (quantity: number) => void
    onClickDelete?: () => void
}