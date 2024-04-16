import fs from "fs";

const currentDate = new Date().toLocaleString();
const currentDateTime = currentDate
  .toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  })
  .toString();
fs.writeFileSync("build-date.txt", currentDateTime);
console.log("Ứng dụng được build vào ngày sss:", currentDateTime);
const buildDate = import.meta.env.__BUILD_DATE__;

console.log("Ứng dụng được build vào ngày:", buildDate);
