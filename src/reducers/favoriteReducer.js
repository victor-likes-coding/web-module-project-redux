import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    dispayFavorites: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((item) => action.payload !== item.id),
            };

        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case TOGGLE_FAVORITES:
            return {
                ...state,
                dispayFavorites: !state.dispayFavorites,
            };

        default:
            return state;
    }
};

export default reducer;
