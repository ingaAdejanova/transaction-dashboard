import { Request, Response } from "express";
import users from "src/data/users.json";

const getUsers = (req: Request, res: Response) => {
  const smeId = req.body.userData.smeId;
  const smeUsers = users
    .filter((user) => user.smeId === smeId)
    .map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      profileImage: user.profileImage,
    }));

  res.status(200).json(smeUsers);
};

const getCurrentUser = (req: Request, res: Response) => {
  const { smeId, id } = req.body.userData;
  const user = users.find((user) => user.smeId === smeId && user.id === id);

  res.status(200).json({
    id: user?.id,
    name: user?.name,
    email: user?.email,
    profileImage: user?.profileImage,
  });
};

export const UsersController = {
  getUsers,
  getCurrentUser,
};
