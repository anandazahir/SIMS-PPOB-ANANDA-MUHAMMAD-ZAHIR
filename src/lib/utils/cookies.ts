import Cookies from "js-cookie";

export const cookies = {
  get: (name: string) => Cookies.get(name),
  set: (name: string, value: string, options = {}) =>
    Cookies.set(name, value, { path: "/", ...options }),
  remove: (name: string) => Cookies.remove(name),
};
