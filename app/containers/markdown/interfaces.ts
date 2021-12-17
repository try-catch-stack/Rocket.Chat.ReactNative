export interface UserMention {
	_id: string;
	username: string;
	name?: string;
}

export interface UserChannel {
	[index: number]: string | number;
	name: string;
	_id: number;
}
