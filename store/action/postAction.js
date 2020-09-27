import { ADD_POST, FETCH_POSTS, DELETE_ALL_POSTS } from "./type";

import axios from "axios";

export const fetchPost = () => async (dispatch) => {
  console.log("Dari Fetch jalan");
  const { data } = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  });
  await dispatch({
    type: FETCH_POSTS,
    payload: data,
  });
};
export const deletePosts = () => (dispatch) =>{
    console.log("bisa")
    dispatch({ type: DELETE_ALL_POSTS, payload: [] });
}
