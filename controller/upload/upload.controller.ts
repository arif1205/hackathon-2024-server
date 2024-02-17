import { NextFunction, Request, Response } from "express";
import { create_profile_service } from "../../services/student.services";
import axios from "axios";
import { CustomError } from "../../custom-class/CustomError";
import { createReadStream } from "fs";

const upload_controller = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const file: any = req.files;
		if (!file) {
			return res.status(400).json({ message: "No file selected" });
		}
		// ** create a form data
		const form = new FormData();
		form.append("file", file?.file);
		console.log(form.get("file"));

		const file_res = await axios.post(`${process.env.FILE_API}/upload`, form, {
			headers: {
				"Content-Type": `multipart/form-data`,
			},
		});
		// console.log(file_res);

		res.status(201).json({
			status: 201,
			message: "Profile Created Successfully",
			profile: file_res,
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

export default { upload_controller };
