import {
  BLOG_REQUESTING,
  BLOG_REQUEST_SUCCESS,
  BLOG_REQUEST_ERROR,
  BLOG_CREATING,
  BLOG_CREATE_SUCCESS,
  BLOG_CREATE_ERROR
} from "../actions/types";

const initialState = {
  list: [],
  requesting: false,
  successful: false,
  messages: [],
  errors: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BLOG_CREATING:
      return {
        ...this.state,
        requesting: true,
        successful: false,
        messages: [
          {
            body: `Blog: ${action.blog.title} being created...`,
            time: new Date()
          }
        ],
        errors: []
      };
    case BLOG_CREATE_SUCCESS:
      return {
        list: state.list.concat([action.blog]),
        requesting: false,
        successful: true,
        messages: [
          {
            body: `Blog: ${action.blog.title} created!`,
            time: new Date()
          }
        ],
        errors: []
      };
    case BLOG_CREATE_ERROR:
      return {
        ...state,
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ])
      };
    case BLOG_REQUESTING:
      return {
        ...state,
        requesting: false,
        successful: true,
        messages: [
          {
            body: "Fetching blogs...",
            time: new Date()
          }
        ],
        errors: []
      };
    case BLOG_REQUEST_SUCCESS:
      return {
        list: action.list,
        requesting: false,
        successful: true,
        messages: [
          {
            body: "Blogs fetched successfully",
            time: new Date()
          }
        ],
        errors: []
      };
    case BLOG_REQUEST_ERROR:
      return {
        requesting: false,
        successful: false,
        messages: [],
        errors:
          state.errors.concat[
            {
              body: action.error.toString(),
              time: new Date()
            }
          ]
      };
    default:
      return state;
  }
};

export default reducer;
