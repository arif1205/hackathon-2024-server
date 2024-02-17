import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../custom-class/CustomError";

const register = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const req_body = req.body;

		const response =
			process.env.AUTH_API &&
			(await axios.post(`${process.env.AUTH_API}/register`, req_body)).data;

		if (!response) {
			throw new CustomError("Failed to register user.", 500);
		}

		res.status(201).json(response);
	} catch (err: any) {
		if (err?.response?.data) {
			const newError = new CustomError(
				err.response.data.error,
				err.response.data.status
			);
			return next(newError);
		}

		next(err);
	}
};

const login = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const response =
			process.env.AUTH_API &&
			(await axios.post(`${process.env.AUTH_API}/login`, req.body)).data;

		if (!response) {
			throw new CustomError("Invalid credentials.", 401);
		}

		res.status(200).json(response);
	} catch (err: any) {
		if (err?.response?.data) {
			const newError = new CustomError(
				err.response.data.error,
				err.response.data.status
			);
			return next(newError);
		}
		next(err);
	}
};

export default { register, login };
