import type { UserType } from "./user.type";
import { messages, users } from ".";

export const data = users.reduce(
	(prev: UserType[] | unknown[], curr: UserType) => {
		const user = messages.find((message) => message.id === curr.id);

		return [
			...prev,
			{
				name: curr.username,
				count: user?.messages.length,
			},
		];
	},
	[]
);
