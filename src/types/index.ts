export type TAuthState = {
  user: TTokenPayload | null;
  token: string | null;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TUser = {
  name: string;
  email: string;
  image: string;
  password: string;
  role: string;
};

export type TProduct = {
  _id: string;
  name: string;
  category: string;
  quantity: number;
  brand: string;
  price: number;
  rating?: number;
  description?: string;
  image: string;
  tag?: string;
  discount?: number;
  isDeleted: boolean;
};

export type ProductFilterQueryDataProps = {
  price?: number;
  selectedBrands?: string[];
  selectedCategories?: string[];
  selectedRatings?: number[];
};

export type TCartProduct = {
  productId: string;
  quantity: number;
  price: number;
  image: string;
  name: string;
};

export type TCart = {
  user: string;
  products: TCartProduct[];
};

export type TTokenPayload = {
  email: string;
  role: string;
  id: string;
  iat: number;
  exp: number;
};
