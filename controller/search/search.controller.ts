import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../custom-class/CustomError";
import { search_teacher_service } from "../../services/search.services";

const teacher_search_controller = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { tag } = req.query;
		const tags = tag?.toString().split(",");

		const teachers = await search_teacher_service(tags);
		res.status(200).json({
			message: "Teachers Fetched Successfully",
			count: teachers.length,
			teachers,
		});
	} catch (err: any) {
		if (err?.response?.data?.message || err?.message) {
			const error = new CustomError(
				err?.response?.data?.message || err?.message,
				400
			);
			next(error);
		}

		next(err);
	}
};

export default { teacher_search_controller };
