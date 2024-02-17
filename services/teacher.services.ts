import prisma from "../db/db_client";

export const get_profile_service = async (user_id: string) => {
	try {
		const profile = await prisma.teacherInfo.findUnique({
			where: { user_id },
		});
		return profile;
	} catch (err) {
		throw err;
	}
};

export const create_profile_service = async (body: any) => {
	try {
		const profile = await prisma.teacherInfo.create({
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
		const profile = await prisma.teacherInfo.update({
			where: { user_id: body.user_id },
			data: body.data,
		});
		return profile;
	} catch (err) {
		throw err;
	}
};
