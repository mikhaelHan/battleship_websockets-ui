import WebSocket from 'ws';
import { IUser } from './types';

export const clients: Record<string, WebSocket> = {};

export const Users: IUser[] = [];
