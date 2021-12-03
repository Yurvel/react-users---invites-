
export interface TeamMember {
    id?: number;
    status?: Status|string;
    user?: UserShortData;
    role?: Role|string;
}

export type Role = "Administrator" | "Standard";

export type Status = "request" | "pending" | "approved" | "declined" | "invited";

export interface UserShortData {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

export interface Invite {
    id?: number;
    phone?: string;
    role?: Role|string;
}

export interface Users {
getUsers(): Promise<TeamMember[]>,
getInvites(): Promise<Invite[]>

}