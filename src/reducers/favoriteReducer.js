import { ADD_FAVORITE, REMOVE_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions";

const initialState = {
    favorites: [],
    displayFavorites: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((item) => action.payload !== item.id),
            };

        case ADD_FAVORITE:
            if (state.favorites.find((movie) => movie.id === action.payload.id)) {
                return state;
            }

            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };

        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites,
            };

        default:
            return state;
    }
};

export default reducer;
