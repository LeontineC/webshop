import * as actionTypes from "./shop-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "the Cloud",
      description: "100% merino wool",
      text: "Apples ducks straw, quail a ostriches donkey, hay hook cucumbers.uthouse at nails mower.",
      image: "./thecloud.png",
      imageTwo: "../thecloud1.png",
      alt: "knitted eggwarmer",
      color: "cream",
      price: 10.0,
    },
    {
      id: 2,
      title: "the Woodland",
      description: "100% merino wool",
      text: "Sage mower goat, raccoons rhubarb outhouse a, apples berries corn.",
      image: "./thewoodland.png",
      imageTwo: "../thewoodland1.png",
      alt: "knitted egg warmer",
      color: "khaki",
      price: 10.0,
    },
    {
      id: 3,
      title: "the Charl",
      description: "100% shetland wool",
      text: "Brussel sprouts cow, rabbits a gates a, storage shed fences.",
      image: "./thecharl.png",
      imageTwo: "../thecharl1.png",
      alt: "knitted eggwarmer",
      color: "beige",
      price: 12.0,
    },
    {
      id: 4,
      title: "the Dew",
      description: "100% angora wool",
      text: "Ewes mushrooms zucchini in forage Harvester at sheep with tractor.",
      image: "./thedew.png",
      imageTwo: "../thedew1.png",
      alt: "knitted eggwarmer",
      color: "grey",
      price: 15.0,
    },
    {
      id: 5,
      title: "the Hare",
      description: "100% merino wool",
      text: "John Deere bees, parsley sweet corn at, porky pig shovels.",
      image: "./thehare.png",
      imageTwo: "../thehare1.png",
      alt: "felt eggwarmer",
      color: "green",
      price: 12.0,
    },
    {
      id: 6,
      title: "the Rabbit",
      description: "100% wool felt",
      text: " Grapes nest pitch fork an plows maple syrup yearlings, quilt squeak doggies.",
      image: "./therabbit.png",
      imageTwo: "../therabbit1.png",
      alt: "felt eggwarmer",
      color: "grey-brown",
      price: 12.0,
    },
    {
      id: 7,
      title: "the Basket",
      description: "100% wool",
      text: "Turkey daisys eggs squeal, horses moonshine apples raising Mooo tractor plow. ",
      image: "./thebasket.png",
      imageTwo: "../thebasket1.png",
      alt: "knitted eggwarmer",
      color: "ochre",
      price: 11.0,
    },
    {
      id: 8,
      title: "the Green Bird",
      description: "100% wool felt",
      text: "Blue berries pigeons buzz and bean prairie dogs nails at est.",
      image: "./thegreenbird.png",
      imageTwo: "../thegreenbird1.png",
      alt: "felt eggwarmer",
      color: "green",
      price: 12.0,
    },
  ],
  cart: [],
  currentItem: null,
  favorites: [], //
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const cartItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      const inCart = state.cart.find((cartItem) =>
        cartItem.id === action.payload.id ? true : false
      ); //checks if in cart already

      return {
        ...state, //spreading data to not lose products
        cart: inCart
          ? state.cart.map(
              (
                cartItem //if in cart map thru to find id
              ) =>
                cartItem.id === action.payload.id
                  ? { ...cartItem, qty: cartItem.qty + 1 } //qty is whatever it is plus 1
                  : cartItem
            )
          : [...state.cart, { ...cartItem, qty: 1 }], //else add 1
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      }; //filter all cart items delete one want to remove

    case actionTypes.ADJUST_ITEM_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(
          (
            cartItem //want specific item
          ) =>
            cartItem.id === action.payload.id //compare id
              ? { ...cartItem, qty: +action.payload.qty } //if find spread again and adjust qty value
              : cartItem
        ), //else return item
      }; //+ removes 0 before number

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state, //sets current item  changes from null
        currentItem: action.payload,
      };

    case actionTypes.ADD_TO_FAVORITES:
      const favoritesItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      const inFavorites = state.favorites.find((favoritesItem) =>
        favoritesItem.id === action.payload.id ? true : false
      );

      if (inFavorites) {
        return state;
      }

      return {
        ...state,
        favorites: [...state.favorites, favoritesItem],
      };

     

    case actionTypes.REMOVE_FROM_FAVORITES:
      /*const favoritesItem = state.products.find(
        (item) => item.id === action.payload.id
      );
      const inFavorites = state.favorites.find((favoritesItem) =>
        favoritesItem.id === action.payload.id ? true : false
      );*/

      if (!inFavorites) {
        return state;
      }

      return {
        ...state,
        favorites: state.favorites.filter(
          (favoritesItem) => favoritesItem.id !== action.payload.id
        ),
      };

    

    default:
      return state;
  }
};

export default shopReducer;
