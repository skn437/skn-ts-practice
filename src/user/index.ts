import type { UserType, UserMessageType } from "./user.type";

export const users: UserType[] = [
	{
		id: "user1",
		username: "skn",
		count: 0,
	},
	{
		id: "user2",
		username: "wang",
		count: 0,
	},
	{
		id: "user3",
		username: "so",
		count: 0,
	},
];

export const messages: UserMessageType[] = [
	{
		id: "user1",
		messages: [
			{
				title: "Message1",
				text: "I am SKN!",
			},
			{
				title: "Message2",
				text: "This is SKN!",
			},
		],
	},
	{
		id: "user2",
		messages: [
			{
				title: "Message1",
				text: "I am Wang",
			},
		],
	},
	{
		id: "user3",
		messages: [
			{
				title: "Message1",
				text: "I am So",
			},
			{
				title: "Message2",
				text: "This is So",
			},
			{
				title: "Message3",
				text: "This is also So",
			},
		],
	},
];
