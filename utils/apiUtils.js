import { get as httpsGet } from "https";

export function get(url) {
  return new Promise((resolve, reject) => {
    httpsGet(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        // console.log("API Response:", data);
        resolve(JSON.parse(data));
      });
      response.on("error", (error) => {
        reject(error);
      });
    });
  });
}
