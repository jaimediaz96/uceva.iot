import { PhotoIcon } from '@heroicons/react/24/solid'

function CardBlog({ title, description, image, author, date }) {
  function renderImg() {
    if (image) {
      return (<img src={image} alt={image} />);
    }
    else {
      return (<PhotoIcon className="h-32 text-black" />);
    }
  }

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-sm border">
      <figure className="w-full md:h-48 lg:h-64 overflow-hidden rounded-lg">
        {renderImg()}
      </figure>

      <div className="h-40 overflow-hidden p-4 border-y">
        <h3 className="text-gray-900 text-lg leading-7 font-semibold block">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 text-sm leading-6">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center p-4">
        <p>{author}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default CardBlog;