import { createContext } from "react";

const globalState = {
	carts: {},
	RelatedProducts: [],
};

const CartCount = createContext(globalState.carts);
const RelatedProducts = createContext(globalState.RelatedPredProducts);

export { CartCount, RelatedProducts };
