import { request } from "./request";

const HOST = "https://hapi-books.p.rapidapi.com/top/2021";

export const getAwardedBooks = () => {
  return request(HOST);
};
