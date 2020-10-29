import * as React from "react";
import { connect } from "react-redux";
import { Prompt, RouteComponentProps } from "react-router-dom";
import { addToBasket } from "./BasketActions";

import Product from "./Product";

import { IProduct } from "./ProductsData";
import { IApplicationState } from "./Store";
import { getProduct } from "./ProductsAction";
import { Likes } from "./LikeActions";
import { ILikeState } from "./LikeTypes";

interface IProps extends RouteComponentProps<{ id: string }> {
  addToBasket: typeof addToBasket;
  addLike: typeof Likes;
  getProduct: typeof getProduct;
  loading: boolean;
  product?: IProduct;
  added: boolean;
  likeState: ILikeState;
}

class ProductPage extends React.Component<IProps> {
  public componentDidMount() {
    if (this.props.match.params.id) {
      const id: number = parseInt(this.props.match.params.id, 10);
      this.props.getProduct(id);
    }
  }

  private navAwayMessage = () =>
    "Are you sure you leave without buying this product?";
  public render() {
    const product = this.props.product;
    return (
      <div className="page-container">
        <Prompt when={!this.props.added} message={this.navAwayMessage} />
        {product || this.props.loading ? (
          <Product
            loading={this.props.loading}
            product={product}
            likeNo={this.props.likeState.likes}
            likeDate={this.props.likeState.lastLike}
            inBasket={this.props.added}
            onAddToBasket={this.handleAddClick}
            onAddLike={this.handleLikeClick}
          />
        ) : (
          <p>Product not found!</p>
        )}
      </div>
    );
  }
  private handleAddClick = () => {
    if (this.props.product) {
      this.props.addToBasket(this.props.product);
    }
  };
  private handleLikeClick = () => {
    this.props.addLike();
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToBasket: (Product: IProduct) => dispatch(addToBasket(Product)),
    getProduct: (id: number) => dispatch(getProduct(id)),
    addLike: () => dispatch(Likes()),
  };
};
const mapStateToProps = (store: IApplicationState) => {
  console.log(store);
  return {
    added: store.basket.products.some((p) =>
      store.products.currentProduct
        ? p.id === store.products.currentProduct.id
        : false
    ),
    basketProducts: store.basket.products,
    loading: store.products.productsLoading,
    product: store.products.currentProduct || undefined,
    likeState: store.likes,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
