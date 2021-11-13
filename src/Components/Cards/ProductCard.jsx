import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, image, price, brand, _id } = props.product;
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div class="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          src={image}
        />
      </div>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {brand}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p class="mt-1">${price}</p>
      </div>
      <p>
        <Link to={`/order/${_id}`}>
          <button className="px-5 py-3 m-4 border">Buy</button>
        </Link>
      </p>
    </div>
  );
};

export default ProductCard;
