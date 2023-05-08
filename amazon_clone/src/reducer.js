export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = basket =>
  basket.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) =>
        basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {

      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;


// {
//   id: '2344345654',
//   title: 'Der heilige Koran, Al- Quran al- Karim, Quran - HOCHWERTIG - Arabisch/ Deutsch Übersetzung - Koran Verstehen',
//   image: 'https://m.media-amazon.com/images/I/51FnsnU1C8L.jpg',
//   price: 16.50,
//   rating: 5
// }