import { createContext, useEffect, useState } from "react";
import { getMetadataFromBlog } from "../Utils";

const UcevaIotContext = createContext();

function UcevaIotProvider({ children }) {
  const urls = [
    "/Content/0-My-first-post.md",
    "/Content/1-My-second-post.md",
    "/Content/2-My-third-post.md"
  ]; // Mock of data of API

  const [dataBlogs, setDataBlogs] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getMetadataFromBlog(urls)
      .then(data => setDataBlogs(data))
      .catch(setDataBlogs([]));
  }, []);

  return (
    <UcevaIotContext.Provider value={{
      dataBlogs,
      setDataBlogs,
      user,
      setUser
    }}>
      {children}
    </UcevaIotContext.Provider>
  );
}

export { UcevaIotProvider, UcevaIotContext };