import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://http-reac-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("could not fecth cart data");
      }
      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotifications({
          status: "error",
          title: "Error..",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotifications({
        status: "pending",
        title: "sending..",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://http-reac-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(" sending cart data failed");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotifications({
          status: "success",
          title: "Sucess..",
          message: "sending cart data succesfully",
        })
      );
    } catch (error) {
      sendCartData().catch((err) => {
        dispatch(
          uiActions.showNotifications({
            status: "error",
            title: "Error..",
            message: "sending cart data failed",
          })
        );
      });
    }
  };
};
