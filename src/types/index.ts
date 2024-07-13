export type TAuthState = {
  user: string | null;
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
