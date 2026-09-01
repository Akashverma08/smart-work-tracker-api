import { User } from "@/types/auth";

const users: User[] = [
    {
        id: "1",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin",
        name: "Admin",
    },
    {
        id: "2",
        email: "student@gmail.com",
        password: "student123",
        role: "student",
        name: "Student",
    },
]

export function Login(email: string,password :string) : User | null{
    const user=users.find((u)=> u.email=== email && u.password===password);
    if(!user){
        return null;
    }

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    )
    return user;
}

export function Logout(): void {
    localStorage.removeItem("user");
}

export function getCurrentUser(): User | null{
    const data=localStorage.getItem("user");
    return data ? JSON.parse(data): null;
}