import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./BasketReducer";
import { IBasketState } from "./BasketTypes";
import { productsReducer } from "./ProductsReducer";
import { IProductsState } from "./ProductsTypes";
import { ILikeState } from "./LikeTypes";
import { LikeReducer } from "./LikeReducer";

export interface IApplicationState {
  basket: IBasketState;
  products: IProductsState;
  likes: ILikeState;
}

const rootReducer = combineReducers<IApplicationState>({
  basket: basketReducer,
  products: productsReducer,
  likes: LikeReducer,
});

export default function configureStore(): Store<IApplicationState> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
