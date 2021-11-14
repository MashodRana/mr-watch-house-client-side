import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { title, image, price, brand, _id } = props.product;
  return (
    <div class="md:w-1/3 p-4 w-full h-full">
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
      <div className='flex justify-center'>
        <Link to={`/order/${_id}`}>
          <button className="px-6 py-2 mt-6 border rounded bgc1 text-gray-200">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
