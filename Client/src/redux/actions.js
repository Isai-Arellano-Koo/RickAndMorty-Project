export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const ORDER = 'ORDER';
export const FILTER = 'FILTER';


export const addFavorite = (character) => {
    return { type: ADD_FAVORITE, payload: character};
};

export const removeFavorite = (id) => {
    return { type: REMOVE_FAVORITE, payload: id};
};

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
};