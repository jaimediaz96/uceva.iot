import { useContext } from "react";
import { UcevaIotContext } from "../Context/UcevaIotContext";
import { Link } from "react-router-dom";
import CardBlog from "../Components/CardBlog";

function Blogs() {
  const { dataBlogs } = useContext(UcevaIotContext);

  return (
    <>
      <section className="w-full p-16 bg-green-600 text-white font-bold text-center border">
        <h1 className="text-4xl mb-4">Innovación y Aprendizaje</h1>
        <h2 className="text-xl">El impacto de la IoT en la UCEVA</h2>
      </section>
      <main className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-16">
        {
          dataBlogs?.map(data => (
            <article key={data.id} className="flex flex-col justify-center">
              <Link
                key={data.id}
                to={`/blog/${data.id}-${data.title.replace(/\s/g, "-")}`}
                className="min-h-[500px] max-h-[600px] overflow-hidden">
                <CardBlog
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  author={data.author}
                  date={data.date}
                />
              </Link>
            </article>
          ))
        }
      </main>
    </>
  );

}

export default Blogs;