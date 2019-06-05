import unsplash from "../api/unsplash";

export const getImages = term => async dispatch => {
  const response = await unsplash.get("/search/photos", {
    params: { query: term }
  });
  dispatch({
    type: "GET_IMAGES",
    payload: response.data.results
  });
};
