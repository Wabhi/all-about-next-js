import { useRouter } from "next/router";
const ProductDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product details for product {productId} </h1>
    </div>
  );
};
export default ProductDetails;
