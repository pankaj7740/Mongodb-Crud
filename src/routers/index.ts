import express from "express";
import { router } from "../controllers/index"

const productRouter = express.Router();
productRouter.use(express.json());
productRouter.use("/products",router);

export {productRouter};


