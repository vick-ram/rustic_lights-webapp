export interface Customer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
}

export interface Product {
    name: string;
    description: string;
    price: number;
    quantity: number;
    sku: string;
    category: string;
    image: string;
    discount: string;
    favourite: boolean;
    createdAt: string;
    updatedAt: string;
}