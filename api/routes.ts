import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAllItems,
  getItem,
  createItems,
  updateItem,
  deleteItem,
} from "./controllers/items.ts";

const router = new Router();

router.get("/api/v1/test", ({ response: res }) => {
  res.body = "Hello, World!";
});

router
  .get("api/v1/items", getAllItems)
  .get("api/v1/items/:id", getItem)
  .post("api/v1/items/", createItems)
  .put("api/v1/items/:id", updateItem)
  .delete("api/v1/items/:id", deleteItem);

export default router;
