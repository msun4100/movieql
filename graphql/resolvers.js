import { getMovies, getMovie } from "./db";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    getSuggestions: (_, { id }) => getMovies(id),
  },
};

export default resolvers;
