import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

interface MoviesBySearchProps {
  movies: any[]; // Update the type for movies
}

const MoviesBySearch = ({ movies }: MoviesBySearchProps) => {
  // Initialize a dictionary to track favorite icon state for each movie by IMDb ID

  return (
    <>
      {movies?.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </>
  );
};

export default MoviesBySearch;
