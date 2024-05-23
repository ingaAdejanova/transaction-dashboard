import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { unauthorized } from "@hapi/boom";
import { SECRET_KEY } from "src/constants";

type UserData = {
  id: string;
  smeId: string;
  name: string;
  email: string;
  profileImage: string;
};

type ParsedToken = {
  userData: UserData;
  iat: number;
  exp: number;
};

export const extractToken = (req: Request): ParsedToken => {
  const authHeader = req.headers.authorization;
  let token: string = "";

  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.substring(7, authHeader.length);
  } else {
    throw unauthorized("Expected authorization header");
  }

  try {
    const parsedToken = jwt.verify(token, SECRET_KEY) as ParsedToken;
    return parsedToken;
  } catch (error) {
    throw unauthorized("Token could not be parsed or is expired");
  }
};

export const tokenParserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedToken = extractToken(req);
    req.body.userData = parsedToken.userData;
    return next();
  } catch (error) {
    return next(error);
  }
};
