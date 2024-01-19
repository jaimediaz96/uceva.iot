function CardBlog({ title, description, image, author, date }) {
  return (
    <div className="max-w-xl rounded-lg bg-white shadow-sm border p-2 mb-8">
      <figure className="w-full h-full object-contain rounded-lg">
        <img
          src={`/${image}`}
          alt={image} />
      </figure>
      <div className="p-4">
        <h2 className="text-gray-900 text-lg leading-7 font-semibold block">
          {title}
        </h2>

        <p className="mt-2 text-gray-600 text-sm leading-6">
          {description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <p>
            {author}
          </p>

          <p>
            {date}
          </p>

          <div className="inline-flex text-white text-sm leading-6 font-medium items-center gap-1 bg-blue-600 py-1 px-2 rounded">
            leer más
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBlog;