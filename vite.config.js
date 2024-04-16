import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      "process.env": process.env,
      __BUILD_DATE__: JSON.stringify(new Date().toLocaleString()),
    },
    plugins: [react()],
  };
});
