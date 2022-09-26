import { useRouter } from "next/router";
const ProductReview = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        Product review for product {productId} is {reviewId}
      </h1>
    </div>
  );
};
export default ProductReview;
