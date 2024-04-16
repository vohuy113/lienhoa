import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      __BUILD_DATE__: new Date(),
      "process.env": process.env,
    },
    plugins: [react()],
  };
});
