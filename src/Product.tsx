import * as React from "react";
import { IProduct } from "./ProductsData";
import Tabs from "./Tabs";
import withLoader from "./withLoader";
import { ILikeState } from "./LikeTypes";

interface IProps {
  product?: IProduct;
  inBasket: boolean;
  // likeState?: ILikeState;
  likeNo: number;
  likeDate?: Date;
  onAddToBasket: () => void;
  onAddLike: () => void;
}
const Product: React.SFC<IProps> = (props) => {
  const product = props.product;
  const handleAddClick = () => {
    props.onAddToBasket();
  };
  const handlerAddLike = () => {
    props.onAddLike();
  };
  if (!product) {
    return null;
  }
  //console.log("like console" + props.likeState?.likes);
  return (
    <React.Fragment>
      <h1>{product.name}</h1>
      <Tabs>
        <Tabs.Tab
          name="Description"
          initialActive={true}
          heading={() => <b> Description</b>}
        >
          <p>{product.description}</p>
        </Tabs.Tab>
        <Tabs.Tab name="Reviews" heading={() => "Reviews"}>
          <ul className="product-reviews">
            {product.reviews.map((review) => (
              <li key={review.reviewer} className="product-reviews-item">
                <i>"{review.comment}"</i> - {review.reviewer}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      </Tabs>

      <p className="product-price">
        {" "}
        {new Intl.NumberFormat("en-US", {
          currency: "USD",
          style: "currency",
        }).format(product.price)}
      </p>
      {!props.inBasket && (
        <button onClick={handleAddClick}>Add to basket</button>
      )}
      <div>
        <p>
          Like Number
          {props.likeNo}
          Like Time
          {props.likeDate?.toUTCString()}
        </p>
        <button onClick={handlerAddLike}> Like</button>
      </div>
    </React.Fragment>
  );
};
export default withLoader(Product);
