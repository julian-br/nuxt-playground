import { productsData } from "../../productsData";

export default defineEventHandler((event) => {
  const productId = event.context.params.id;
  console.log(typeof productId);

  const product = productsData.find((data) => data.id === productId);
  if (product === undefined) {
    throw new Error("product not in database");
  }

  return product;
});
