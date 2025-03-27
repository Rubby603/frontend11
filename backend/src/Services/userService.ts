import prisma from "../database/database";
import { encrypt, decrypt } from "../utils/encrypt";
import { generateToken } from "../utils/jwt";

export const registerUserService = async (email: string, password: string, name: string) => {
  const encryptPassword = encrypt(password);

  return prisma.user.create({
    data: { email, password: encryptPassword, name },
  });
};

export const loginUserService = async (name: string, email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const decryptedPassword = decrypt(user.password);

  if (decryptedPassword !== password) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user.id);
  return token;
};

export const getUserProfileService = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
