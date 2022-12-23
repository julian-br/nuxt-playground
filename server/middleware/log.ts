export default defineEventHandler((event) => {
  const url = event.node.req.url ?? "";
  if (url.includes("products")) {
    console.log("New", event.node.req.method, "request: " + event.node.req.url);
  }
});
