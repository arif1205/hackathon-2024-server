import prisma from "../db/db_client";

export const upload_profile_service = async (body: any) => {
	try {
		const profile = await prisma.studentInfo.create({
			data: body,
		});
		return profile;
	} catch (err) {
		throw err;
	}
};
