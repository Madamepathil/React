import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

/*       state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        }); */

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    const item = {
      id: id,
      price: price,
      name: title,
    };
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
