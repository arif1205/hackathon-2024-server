import { Request as ExpressRequest } from "express";

export interface CustomError extends Error {
	status?: number;
}

export type Role = "admin" | "user";

export interface Experties {
	name: string;
	type: "predefined" | "custom";
}

export interface CustomRequest extends ExpressRequest {
	user: any;
}
