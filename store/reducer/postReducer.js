import * as type from "../action/type";

const initialState = {
  posts: [],
  item: {},
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_POSTS: {
      console.log("dari reducer FETCH_POSTS JALAN");
      //   console.log("Payload ada",action.payload)
      return {
        ...state,
        posts: action.payload,
      };
    }
    case type.DELETE_ALL_POSTS: {
      console.log("ini delete");
      return {
        ...state,
        posts: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
