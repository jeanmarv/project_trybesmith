interface IOrder {
  id: number;
  userId: number;
}

interface IJoin extends IOrder {
  productsIds: number[]
}

export default IJoin;