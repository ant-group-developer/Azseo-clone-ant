export interface CommonParams {
    offset?: number;
    limit?: number;
    keyword?: string;
}

export interface ListResponse<T> {
    message: string;
    total: number;
    data: Array<T>;
}

export interface Props {}
