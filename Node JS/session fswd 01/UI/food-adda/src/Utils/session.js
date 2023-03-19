const session_key = "session";
const cart_key = "session_cart";

export const setSession = ({ type, token }) => {
  localStorage.setItem(
    session_key,
    JSON.stringify({
      type, //user type 1 - Customer, 2 - admin
      token,
    })
  );
};

export const getSession = () => {
  let sessionData = localStorage.getItem(session_key);
  if (typeof sessionData === "string") {
    sessionData = JSON.parse(sessionData);
    return sessionData;
  }
  return false;
};

export const setSessionCart = (cart) => {
  localStorage.setItem(cart_key, JSON.stringify(cart));
  console.log(cart);
};

export const getSessionCart = () => {
  let sessionCart = localStorage.getItem(cart_key);
  if (typeof sessionCart === "string") {
    sessionCart = JSON.parse(sessionCart);
    console.log(sessionCart);
    return sessionCart;
  }
};
