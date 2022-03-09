const { Router } = require("express");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);
movieRouter.put("/movie", updateMovie);

module.exports = movieRouter;
