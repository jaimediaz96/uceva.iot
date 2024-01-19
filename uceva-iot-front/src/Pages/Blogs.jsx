import { useContext } from "react";
import { UcevaIotContext } from "../Context/UcevaIotContext";
import { Link } from "react-router-dom";
import CardBlog from "../Components/CardBlog";

function Blogs() {
  const { metadataBlogs } = useContext(UcevaIotContext);

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Proyectos</h1>
      </div>
      {
        metadataBlogs?.map((data, index) => (
          <Link key={index} to={`/blog/${data.id}`}>
            <CardBlog
              title={data.title}
              description={data.description}
              image={data.image}
              author={data.author}
              date={data.date}
            />
          </Link>
        ))
      }
    </>
  );

}

export default Blogs;