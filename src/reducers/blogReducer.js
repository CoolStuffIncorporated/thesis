import * as types from "../actions/types";
import { updateObject } from "../utility";

// export default function blogs(state = [], action) {
//   switch (action.type) {
//     case types.ADD_BLOG:
//       return [action.payload, ...state];

//     case types.GET_BLOGS:
//       return action.payload;

//     default:
//       return state;
//   }
// }



const initialState = {
  blogs: [],
  loading: false
};

const getBlogsRequest = (state, action) => {
  return updateObject(state, { loading: true });
};

const getBlogsSuccess = (state, action) => {
  return updateObject(state, {
    blogs: action.blogs,
    loading: false
  });
};

const getBlogsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BLOGS_REQUEST:
      return getBlogsRequest(state, action);
    case types.GET_BLOGS_SUCCESS:
      return getBlogsSuccess(state, action);
    case types.GET_BLOGS_FAILURE:
      return getBlogsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
