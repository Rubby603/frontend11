  import { Request, Response } from "express";
  import { createProductService, getProductsService , getProductByIdService, updateProductService, deleteProductService} from "../Services/productService";

  export const createProduct = async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const { image, name, price, color, description } = req.body;
      const product = await createProductService(image, name, price, color, description);
      res.status(201).json(product);
      console.log(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to create product" });
    }
  };

  export const getProduct = async (req: Request, res: Response) => {
    try {
      
      const products = await getProductsService();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve products" });
    }
  };

  export const getProductById = async (req: Request, res: Response) => {
    try {
      const product = await getProductByIdService(req.params.id);
      if (!product) return res.sendStatus(404);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve product" });
    }
  };

  export const updateProduct = async (req: Request, res: Response) => {
    try {
      const { name, price, description } = req.body;
      const updatedProduct = await updateProductService(req.params.id, name, price, description);
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: "Failed to update product" });
    }
  };

  export const deleteProduct = async (req: Request, res: Response) => {
    try {
      await deleteProductService(req.params.id);
      res.json({ message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  };
