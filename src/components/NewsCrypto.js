import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsCrypto = () => {
  useEffect(() => {
    getNews();
  }, []);

  const [news, setNews] = useState([]);

  let getNews = () => {
    const options = {
      method: "GET",
      url: "https://crypto-news16.p.rapidapi.com/news/top/5",
      headers: {
        "X-RapidAPI-Key": "8a657cf57amsh9db6e845e4bd475p199739jsn8d8444d1c05b",
        "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNews(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="crypto-news">
      <h1>Crypto News 📰</h1>
      {news.map((berita) => (
        <p>
          <a href={berita.url}>{berita.title}</a>
        </p>
      ))}
    </div>
  );
};

export default NewsCrypto;
