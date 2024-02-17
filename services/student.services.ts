import prisma from "../db/db_client";

export const create_profile_service = async (body: any) => {
	try {
		const profile = await prisma.studentInfo.create({
			data: body,
		});
		return profile;
	} catch (err) {
		throw err;
	}
};

export const update_profile_service = async (body: {
	user_id: string;
	data: any;
}) => {
	try {
		const profile = await prisma.studentInfo.update({
			where: { user_id: body.user_id },
			data: body.data,
		});
		return profile;
	} catch (err) {
		throw err;
	}
};
