"use client";

import { createContext, useState, ReactNode } from "react";

import {
    Login as loginServices,
    Logout as logOutServices,
    getCurrentUser,
} from "@/services/authService";


import { User } from "@/types/auth"

interface AuthContextType {
    user: User | null;
    login: (
        email: string,
        password: string
    ) => User | null;
    logout: () => void;
}


export const AuthContext = createContext<AuthContextType | null>(null);


export function AuthProvider({ children, }: { children: ReactNode }) {

    const [user, setUser] = useState<User | null>(
        () => getCurrentUser()
    );

    function login(email: string, password: string) {
        const loggedInUser = loginServices(email, password);
        if (loggedInUser) {
            setUser(loggedInUser);
        }

        return loggedInUser;




    }

    function logout() {
        logOutServices();
        setUser(null);
    }

    return (
        <AuthContext.Provider 
          value ={{
            user,Login,Logout
          }}> {children}  </AuthContext.provider>
    )



}


