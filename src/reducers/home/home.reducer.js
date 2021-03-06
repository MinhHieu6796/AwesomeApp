import HomeTypes from '../../actions/home/home.types';

const initState = {
  number: 0,
};

export const HomeReducer = (state = initState, action) => {
  switch (action.type) {
    case HomeTypes.HOME_INCREMENT:
      return { ...state, number: state.number + 2 };
    case HomeTypes.HOME_DECREMENT:
      return { ...state, number: state.number - 3 };
    case HomeTypes.HOME_SETNUMBER:
      return { ...state, number: action.number };
    case HomeTypes.HOME_RESET:
      return { ...state, number: 5 };
    default:
      return state;
  }
};
