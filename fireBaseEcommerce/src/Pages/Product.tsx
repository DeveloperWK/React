import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useGetProductQuery } from "../Features/firebaseApiSlice";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetProductQuery(id ?? "");

  console.log(product);

  return (
    <>
      {isLoading && toast.info("Loading...")}
      {isError && toast.error(error.message)}
      <section>
        {product && (
          <div className="product">
            <img src={product.image} alt={product.title} />
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <h1>{product.price}</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Product;
