import type { ProductDisplayProps } from "../../types";

function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart = () => {},
  children,
}: ProductDisplayProps) {
  //onAddToCart is optional and has default value, we send the product id to the parent and use it in there, to add the product
  // to the array of cartItems
  return (
    <div className="flex items-center justify-start py-4">
      <div className="flex flex-row gap-3.5 border border-gray-300 rounded-2xl overflow-hidden">
        {product.imageUrl && <img src={product.imageUrl} />}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-blue-600 mt-2">
            ${product.price}
          </p>
          {showDescription && (
            <p className="text-gray-600 mt-2"> {product.description}</p>
          )}
          {showStockStatus && (
            <p
              className={`mt-2 ${product.inStock ? "text-green-600" : "text-red-600"}`}
            >
              {product.inStock == true ? "In Stock" : "Out of Stock"}
            </p>
          )}
          <button
            onClick={() => onAddToCart(product.id)}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Add to Cart
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
