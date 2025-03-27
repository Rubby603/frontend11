import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface RequestWithUser extends Request {
  user?: { id: string };
}

export const authenticateJWT = (req: RequestWithUser, res: Response, next: NextFunction): void => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log(req.headers["authorization"]);

  if (!token) {
    res.status(403).json({ message: "Token is baihgui bn" });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded: any) => {
    if (err) {
      res.status(403).json({ message: "Invalid token" });
      return;
    }

    req.user = decoded;  
    console.log( req.user); 
    next();
  });
};
