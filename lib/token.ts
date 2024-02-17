import jwt, { TokenExpiredError } from "jsonwebtoken";
import { CustomError } from "../custom-class/CustomError";

// verify jwt token
export const verifyToken = async (token: string) => {
	try {
		if (process.env.JWT_SECRET)
			return jwt.verify(token, process.env.JWT_SECRET);
		else throw new CustomError("Couldn't verify token", 500);
	} catch (err: any) {
		// ** if token is expired
		if (err instanceof TokenExpiredError) {
			throw new CustomError("Token expired", 401);
		} else {
			throw err;
		}
	}
};

// decode jwt token
export const decodeToken = async (token: string) => {
	return jwt.decode(token);
};
