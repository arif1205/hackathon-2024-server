import { CustomError } from "../custom-class/CustomError";
import jwt from "jsonwebtoken";

export const check_auth = (req: any, res: any, next: any) => {
	try {
		const token = req.headers.authorization?.split(" ")[1];
		if (!token || !process.env.JWT_SECRET) {
			throw new CustomError("Authorization Failed", 401);
		}
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;

		next();
	} catch (err: any) {
		next(err);
	}
};
