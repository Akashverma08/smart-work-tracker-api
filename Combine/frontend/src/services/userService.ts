import type { User } from "../types/user";
import axios from "axios";

const apiBaseUrl = (import.meta.env.VITE_API_URL ?? "http://localhost:3000").replace(/\/+$/, "");
const url = apiBaseUrl.endsWith("/users") ? apiBaseUrl : `${apiBaseUrl}/users`;

export const getUser = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(url);

    return response.data.map((user) => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    }));
};

export const addNewUser = async (user: User): Promise<User> => {
    const response = await axios.post<User>(`${url}/add`, user);
    return response.data;
};

export const updatedUserApi = async (id: number, user: Omit<User, "id">): Promise<User> => {
    const response = await axios.put<User>(`${url}/${id}`, user);
    return response.data;
};

export const deleteUserApi = async (id: number): Promise<User> => {
    const response = await axios.delete<User>(`${url}/${id}`);
    return response.data;
};