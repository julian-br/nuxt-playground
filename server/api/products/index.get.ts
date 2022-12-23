import { productsData } from "../../productsData";

export default defineEventHandler((event) => {
  return productsData;
});
