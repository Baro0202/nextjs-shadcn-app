import { useQuery } from "react-query";
import apiClient from "../api-client";

export const fetchUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};

export const useUsers = () => {
  return useQuery("users", fetchUsers);
};

export const fetchUserById = async (userId: any) => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};

export const useUserById = (userId: any) => {
  return useQuery(["user", userId], () => fetchUserById(userId), {
    enabled: !!userId,
  });
};
