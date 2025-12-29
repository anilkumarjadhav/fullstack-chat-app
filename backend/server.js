import app from "./src/app.js";
import dotenv from "dotenv";
import { connectDB } from "./src/lib/db.js";
import { server } from "./src/lib/socket.js";

dotenv.config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log("server is running on port:", PORT);
  connectDB();
});
