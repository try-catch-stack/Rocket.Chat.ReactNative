import Model from '@nozbe/watermelondb/Model';
import { MarkdownAST } from '@rocket.chat/message-parser';

import { IAttachment } from './IAttachment';
import { IUserChannel, IUserMention, IUserMessage } from './IMessage';
import { IReaction } from './IReaction';
import { SubscriptionType } from './ISubscription';
import { IUrl } from './IUrl';

interface IFileThread {
	_id: string;
	name: string;
	type: string;
}

export interface IThreadResult {
	_id: string;
	rid: string;
	ts: string;
	msg: string;
	file?: IFileThread;
	files?: IFileThread[];
	groupable?: boolean;
	attachments?: IAttachment[];
	md?: MarkdownAST;
	u: IUserMessage;
	_updatedAt: string;
	urls: IUrl[];
	mentions: IUserMention[];
	channels: IUserChannel[];
	replies: string[];
	tcount: number;
	tlm: string;
}

export interface IThread {
	id: string;
	msg: string;
	t: SubscriptionType;
	rid: string;
	_updatedAt: Date;
	ts: Date;
	u: IUserMessage;
	alias: any;
	parseUrls: any;
	groupable: boolean;
	avatar: string;
	emoji: any;
	attachments: IAttachment[];
	urls: IUrl[];
	status: number;
	pinned: boolean;
	starred: boolean;
	editedBy: { _id: string; username: string };
	reactions: IReaction[];
	role: string;
	drid: string;
	dcount: number;
	dlm: number;
	tmid: string;
	tcount: number;
	tlm: Date;
	replies: string[];
	mentions: IUserMention[];
	channels: IUserChannel[];
	unread: boolean;
	autoTranslate: boolean;
	translations: any;
	e2e: any;
}

export type TThreadModel = IThread & Model;
