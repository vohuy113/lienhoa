import fs from "fs";

let envContent = "";
try {
  envContent = fs.readFileSync(".env", "utf8");
} catch (err) {
  console.error("Error reading .env file:", err);
  process.exit(1);
}

const now = new Date();
const currentDateTime = now
  .toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
  })
  .toString();

let newEnvContent = "";
if (envContent.includes("REACT_APP_CURRENT_DATETIME")) {
  newEnvContent = envContent.replace(
    /REACT_APP_CURRENT_DATETIME="[^"]*"/,
    `REACT_APP_CURRENT_DATETIME="${currentDateTime}"`
  );
} else {
  newEnvContent = `${envContent}\nREACT_APP_CURRENT_DATETIME="${currentDateTime}"`;
}

try {
  fs.writeFileSync(".env", newEnvContent);
  console.log(
    "Environment variable REACT_APP_CURRENT_DATETIME added/updated in .env file."
  );
} catch (err) {
  console.error("Error writing to .env file:", err);
  process.exit(1);
}
