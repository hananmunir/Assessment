import express from "express";
import {
  postTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from "../controller/todo.js";

const router = express.Router();

router.post("/", postTask);
router.get("/", getTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
