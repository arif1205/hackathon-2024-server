import { NextFunction, Response, Request } from "express";
import { create_experties_service } from "../../services/experties.service";
import {
	create_profile_service,
	update_profile_service,
} from "../../services/student.services";

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
			message: "Profile Created Successfully",
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
		res.status(201).json({
			status: 201,
			message: "Profile Updated Successfully",
			experties,
		});
	} catch (err: any) {
		next(err);
	}
};

export default { update_profile_controller, create_profile_controller };
