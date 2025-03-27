import prisma from "../database/database";

export const createProductService = async (image: string, name: string, price: number, color: string[],  description: string) => {
  return prisma.product.create({
    data: {
      image,
      name,
      price,
      color,
      description
    },
  });
};

export const getProductsService = async () => {
  return prisma.product.findMany({
    select: {
      id: true,
      image: true,
      name: true,
      price: true,
      color: true,
    }, 
  });
};


export const getProductByIdService = async (id: string) => {
  return prisma.product.findUnique({
    where: { id },
    select: {
      id: true,
      image: true,
      name: true,
      price: true,
      color: true,
      description: true, 
    },
  });
};

export const updateProductService = async (id: string, name: string, price: number, description:string) => {
  return prisma.product.update({
    where: { id },
    data: { name, price, description },
  });
};

export const deleteProductService = async (id: string) => {
  return prisma.product.delete({
    where: { id },
  });
};
