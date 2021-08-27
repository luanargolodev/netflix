import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./tmdb";
import MovieRow from "./components/MovieRow";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total
      let list = await Tmdb.getHomeList();
      console.log(list);
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
