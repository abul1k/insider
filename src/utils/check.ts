import { getUserData } from "@/jwt/jwtService";

export const check = (role: string[] | string) => {
  if (getUserData()) {
    console.log(role);
    const roles = getUserData().roles.map((role) => role);

    if (Array.isArray(role)) {
      return role.some((item) => roles.includes(item));
    }
    return roles.includes(role);
  }
};
