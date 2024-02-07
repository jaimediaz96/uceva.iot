import { useContext } from "react";
import { UcevaIotContext } from "../Context/UcevaIotContext";
import { Link } from "react-router-dom";
import CardBlog from "../Components/CardBlog";

function Blogs() {
  const { dataBlogs } = useContext(UcevaIotContext);

  return (
    <>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 my-6">Proyectos</h1>
      </div>
      {
        dataBlogs?.map(data => (
          <Link key={data.id} to={`/blog/${data.id}-${data.title.replace(/\s/g, "-")}`}>
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