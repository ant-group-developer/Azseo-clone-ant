import { CommonParams } from '@/types';

export type PlatformParams = CommonParams & {};

export interface PlatformData {
    id: number;
    name: string;
    icon: string;
    location?: number;
    dateCreated: string;
}
