import { NextFunction, Request, Response } from "express";
import {
	create_profile_service,
	get_profile_service,
	update_profile_service,
} from "../../services/student.services";

const get_profile_controller = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user_info: any = req.headers.user;

		const profile = await get_profile_service(user_info?.id);

		if (!profile)
			return res.status(404).json({
				status: 404,
				message: "Profile not found",
			});

		res.status(201).json({
			status: 200,
			message: "Profile found Successfully",
			profile,
		});
	} catch (err: any) {
		next(err);
	}
};

const create_profile_controller = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user_info: any = req.headers.user;
		const req_body = { ...req.body, user_id: user_info?.id, user_info };

		const profile = await create_profile_service(req_body);

		res.status(201).json({
			status: 201,
			message: "Profile created Successfully",
			profile,
		});
	} catch (err: any) {
		next(err);
	}
};

const update_profile_controller = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const user_id = req.params.id;

		const experties = await update_profile_service({ user_id, data: req.body });
		res.status(204).json({
			status: 204,
			message: "Profile Updated Successfully",
			experties,
		});
	} catch (err: any) {
		next(err);
	}
};

export default {
	update_profile_controller,
	create_profile_controller,
	get_profile_controller,
};
