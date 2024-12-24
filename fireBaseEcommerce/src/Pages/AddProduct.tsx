import { Button, FileInput, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useAddProductsMutation } from "../Features/firebaseApiSlice";

const AddProduct = () => {
  const [addProducts] = useAddProductsMutation();
  const [addProduct, setAddProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
    stock: "",
    tags: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]:
        e.target.name === "price" || e.target.name === "stock"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const data = new FormData();
    data.append("file", file!);
    data.append("upload_preset", "firstApp");
    data.append("cloud_name", "dhagnak0m");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dhagnak0m/image/upload`,
      {
        method: "post",
        body: data,
      }
    );
    const result = await res.json();
    setAddProduct({ ...addProduct, image: result.secure_url });
  };
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addProduct.image) {
      toast.info("Image is Uploading, please wait...");
      return;
    }
    await addProducts(addProduct); // call the mutation
    toast.success("Product Added Successfully");
    navigate("/");
  };
  return (
    <section>
      <form
        className="flex max-w-md flex-col gap-4 m-auto h-screen mt-5"
        onSubmit={submitHandler}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Title" />
          </div>
          <TextInput
            id="small"
            type="text"
            sizing="sm"
            name="title"
            value={addProduct.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Price" />
          </div>
          <TextInput
            id="small"
            type="number"
            sizing="sm"
            name="price"
            value={addProduct.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="small" value="Product Description" />
          </div>
          <TextInput
            id="large"
            type="text"
            sizing="lg"
            name="description"
            value={addProduct.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Product Category" />
            </div>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              name="category"
              value={addProduct.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Product Stock" />
            </div>
            <TextInput
              id="small"
              type="number"
              sizing="sm"
              name="stock"
              value={addProduct.stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="small" value="Product Tags" />
            </div>
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              name="tags"
              value={addProduct.tags}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput id="file-upload" onChange={handleImageChange} />
        </div>
        <button>
          <Button color="green">Add Product</Button>
        </button>
        {/* <CustomButton color={"green"} content={"Add Product"} /> */}
      </form>
    </section>
  );
};

export default AddProduct;
