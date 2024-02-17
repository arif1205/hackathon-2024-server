import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../custom-class/CustomError";
import {
	create_experties_service,
	get_all_experties_service,
} from "../../services/experties.service";

const create_experties = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const req_body = req.body;

		const experties = await create_experties_service(req_body);
		res.status(201).json({
			status: 201,
			message: "Experties Created Successfully",
			experties,
		});
	} catch (err: any) {
		next(err);
	}
};

const get_all_experties = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const experties = await get_all_experties_service();

		res.status(200).json({
			status: 200,
			message: "Experties Fetched Successfully",
			count: experties.length,
			experties: experties,
		});
	} catch (err: any) {
		next(err);
	}
};

export default { create_experties, get_all_experties };
