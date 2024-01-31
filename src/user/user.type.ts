export interface UserType {
	id: string;
	username: string;
	count: number;
}

interface MessageType {
	title: string;
	text: string;
}

export interface UserMessageType {
	id: string;
	messages: MessageType[];
}
