
const initstate = {
  searchTerm: "",
  searchResult: []
}

const searchReducer = (oldstate = initstate, action) => {
  Object.freeze(oldstate);
  // console.log("@Search_Reducer")
  switch (action.type) {
    case "FETCH_SEARCH_QUERY":
      return {
        ...oldstate,
        searchTerm: action.payload.data.request,
        searchResult: action.payload.data.data
      }
    default:
      return oldstate
  }
}


export default searchReducer