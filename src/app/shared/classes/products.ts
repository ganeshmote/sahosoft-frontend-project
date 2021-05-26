// Products

export interface Product {
    id?: number;
    name?: string;
    price?: number;
    salePrice?: number;
    discount?: number;
    pictures?: string;
    shortDetails?: string;
    description?: string;
    stock?: number;
    new?: boolean;
    sale?: boolean;
    category?: string;
    colors?: any[];
    size?: any[];
    tags?: any[];
    variants?: any[];
}

//Color Filter
export interface ColorFilter {
    color?: any;
}

// Tag Filter
export interface TagFilter {
    tag?: any;
}