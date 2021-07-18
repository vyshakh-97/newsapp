import React, { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [newsUrl, setNewsUrl] = useState("");

  const changeNewsUrl = (value) => {
    setNewsUrl(value);
    console.log(value);
  };
  const value = {
    newsUrl,
    changeNewsUrl,
  };
  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
