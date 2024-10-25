export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    role: string;
    profile: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface Product {
    id: string;
    name: string;
    shortDescription: string;
    detailedDescription: string;
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

export interface Address {
    id: string;
    userId: string;
    name: string;
    phone: string;
    county: string;
    city: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}

interface CartItem {
    id: string;
    cartId: string;
    product: Product;
    quantity: number;
    unitPrice: string;
    discountPrice: string;
}

export interface Cart {
    id: string;
    userId: string;
    items: CartItem[];
    total: string
}

interface OrderItem{
    id: string;
    product: Product;
    quantity: number;
    unitPrice: string;
}

export interface Order{
    id: string;
    userId: string;
    items: OrderItem[];
    total: string;
    status: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}

export interface Review {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    commentTitle: string;
    comment: string;
    helpful: number;
    createdAt: string;
    updatedAt: string;
}