import {ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER }from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case ADD_FAVORITE:
        return { ...state, myFavorites: action.payload, allCharacters: action.action.payload };
        
        case REMOVE_FAVORITE:
      return { ...state, myFavorites: action.payload };

        case FILTER: 
        const filterCharacters = state.allCharacters.filter(character => {
            return character.gender === action.payload
        })
        return {
            ...state,
            myFavorites: filterCharacters 
        }
        case ORDER:
        const sortedCharacters = [...state.allCharacters].sort((a, b) => {
          if (action.payload === "A") {
            return a.id - b.id;
          } else if (action.payload === "D") {
            return b.id - a.id;
          }
          return 0;
        });
        return {
          ...state,
          myFavorites: sortedCharacters,
        };


        default:
            return {...state};
    }
}

export default rootReducer;