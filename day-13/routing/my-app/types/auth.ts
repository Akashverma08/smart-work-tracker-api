export type Role= 'admin' | 'student';

export interface User{
    id:string;
    email: string;
    password: string;
    name: string;
    role:Role;
}