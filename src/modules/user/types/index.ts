export interface User {
    id: string;
    email: string;
    name: string;
}

export interface role {
    id: number;
    name: string;
}

export interface UserDetail extends User {
    isActive: boolean;
    roleId: string;
    funds: number;
    role: role;
}
