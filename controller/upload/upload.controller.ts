import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../custom-class/CustomError";
import { v2 as cloudinary } from "cloudinary";
import {
	validate_file_size,
	validate_image_file,
	validate_pdf_file,
} from "../../lib/validation";

const upload_controller = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const file: any = req.files;

		if (!file) {
			return res.status(400).json({ message: "No file uploaded" });
		}

		const filetype = file?.file?.mimetype;
		if (
			(!validate_image_file(filetype) && !validate_pdf_file(filetype)) ||
			!validate_file_size(file?.file?.size)
		) {
			return res.status(400).json({ message: "Invalid file type or size" });
		}

		cloudinary.uploader.upload(
			file?.file?.tempFilePath,
			function (error: any, result: any) {
				if (error) {
					throw error;
				}
				res.json({ message: "File uploaded successfully", data: result?.url });
			}
		);
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
