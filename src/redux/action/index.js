export const GET_ALL_BOOKS = "GET_ALL_BOOKS";

export const fetchAllBooks = () => {
  const apiKey = import.meta.env.VITE_API_KEY;

  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: GET_ALL_BOOKS,
          payload: data.results.books,
        });
      } else {
        throw new Error(`Server Error`);
      }
    } catch (error) {
      console.error("Error fetching books data: ", error);
    }
  };
};
