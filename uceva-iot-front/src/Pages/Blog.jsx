import Markdown from "react-markdown"
import { useContext } from "react";
import { PhotoIcon } from '@heroicons/react/24/solid'
import { UcevaIotContext } from "../Context/UcevaIotContext";
import "../Styles/markdown-styles.css"

function Blog() {
  const { dataBlogs } = useContext(UcevaIotContext);

  const currentPath = window.location.pathname;
  const blogPath = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  const index = blogPath.substring(0, blogPath.indexOf("-"));

  const metadata = dataBlogs.length > 0 ?
    dataBlogs.find(metaBlog => metaBlog.id == index) :
    {
      title: "Cargando titulo",
      date: "Cargando fecha",
      author: "Cargando autor",
      content: "Cargando contenido"
    };

  function renderImg() {
    if (metadata.image) {
      return (<img src={metadata.image} alt={metadata.image} />);
    }
    else {
      return (<PhotoIcon className="h-32 text-black" />);
    }
  }

  return (
    <div className="w-1/2 mt-2 mb-16">
      <figure>
        {renderImg()}
      </figure>
      <h2 className="text-3xl font-bold my-4">{metadata.title}</h2>
      <small className="text-sm font-light my-1">Publicado el {metadata.date} por {metadata.author}</small>
      <hr />

      <article className="markdown-container">
        <Markdown>
          {metadata.content}
        </Markdown>
      </article>
    </div>
  );
}

export default Blog;