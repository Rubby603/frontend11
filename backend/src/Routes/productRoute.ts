import express, { Request, Response, NextFunction } from "express";
import { createProduct, getProduct, getProductById, updateProduct, deleteProduct } from "../Controllers/productController";
import { authenticateJWT } from "../Middlewares/tokenMiddleware";

const router = express.Router();

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
	Promise.resolve(fn(req, res, next)).catch(next);
};

router.post("/", authenticateJWT, asyncHandler(createProduct));
router.get("/", asyncHandler(getProduct));
router.get("/:id", asyncHandler(getProductById));
router.put("/:id", authenticateJWT, asyncHandler(updateProduct));
router.delete("/:id", authenticateJWT, asyncHandler(deleteProduct));

export default router;
