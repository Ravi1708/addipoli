import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  SAVE_SHIPPING_ADDRESS_REQUEST,
  SAVE_SHIPPING_ADDRESS_FAIL,
  SAVE_SHIPPING_ADDRESS_SUCCESS,
} from "../constants/cartConstants";

const URL = "https://api.addipoli-puttus.com";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${URL}/common/products/${id}`);

  console.log(data);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (address) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: address,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(address));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};

export const createAddress = (address) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SAVE_SHIPPING_ADDRESS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        "x-access-token": `${userInfo.accessToken}`,
      },
    };

    const { data } = await axios.post(`${URL}/user/address`, address, config);

    dispatch({
      type: SAVE_SHIPPING_ADDRESS_SUCCESS,
      payload: "shiiping address added",
    });
  } catch (error) {
    dispatch({
      type: SAVE_SHIPPING_ADDRESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};