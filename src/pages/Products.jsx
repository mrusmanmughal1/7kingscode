import MainBanner from "../UI/MainBanner";
import ProductDetails from "../UI/ProductDetails";

const Products = () => {
  return (
    <div>
      <MainBanner
        text="About Us"
        title="WE PROVIDE ENTERPRISE-LEVEL SOLUTIONS"
      />
      <ProductDetails />
    </div>
  );
};

export default Products;
