export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    count?: number
}

export interface IBasket {
    id: number
    count: number,
    sum: number
}