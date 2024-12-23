import { Button, Card } from "flowbite-react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useGetProductsQuery } from "../Features/firebaseApiSlice";

const Products = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery({}); // get products from API

  return (
    <>
      <section className="flex gap-5 p-5">
        {isLoading && toast.info("Loading...")}
        {isError && toast.error(error.message)}
        {!isLoading &&
          !isError &&
          data &&
          data.map((product) => (
            <Card key={product.id} className="max-w-sm h-30">
              <img src={product.image} alt={product.title} className="h-40" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <Link to={`/products/${product.id}`}>
                <Button>
                  View Details
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
            </Card>
          ))}
      </section>
    </>
  );
};

export default Products;
