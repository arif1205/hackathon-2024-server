import prisma from "../db/db_client";

export const create_experties_service = async (body: any) => {
	try {
		const experties = await prisma.experties.create({
			data: body,
		});
		return experties;
	} catch (err) {
		throw err;
	}
};

export const get_all_experties_service = async () => {
	try {
		const experties = await prisma.experties.findMany();
		return experties;
	} catch (err) {
		throw err;
	}
};
