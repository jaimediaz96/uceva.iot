import { createContext, useEffect, useState } from "react";
import { getMetadataFromBlog } from "../Utils";

const UcevaIotContext = createContext();

function UcevaIotProvider({ children }) {
  const urls = ['/Content/first-post.md', 'Content/second-post.md']; // Mock of data of API

  const [metadataBlogs, setMetadataBlogs] = useState([]);
  console.log('Metadatos:', metadataBlogs);

  useEffect(() => {
    getMetadataFromBlog(urls)
      .then(data => setMetadataBlogs(data))
      .catch(setMetadataBlogs([]));
  }, []);

  return (
    <UcevaIotContext.Provider value={{
      metadataBlogs,
      setMetadataBlogs
    }}>
      {children}
    </UcevaIotContext.Provider>
  );
}

export { UcevaIotProvider, UcevaIotContext };