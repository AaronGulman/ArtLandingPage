import express from "express";
import cors from "cors";
import orders from "./router/router.js";

const server = express();
const PORT = process.env.PORT || 5050;

server.use(cors());
server.use(express.json());
server.use("/orders", orders);

server.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
