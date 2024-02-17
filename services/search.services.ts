import prisma from "../db/db_client";

export const search_teacher_service = async (tags?: string[]) => {
	try {
		const teachers = await prisma.teacherInfo.findMany();

		if (!tags) {
			return teachers;
		}
		const filteredTeachers = teachers.filter((teacher) =>
			teacher.experties.some((expertise) => tags.includes(expertise))
		);

		return filteredTeachers;
	} catch (err) {
		throw err;
	}
};
