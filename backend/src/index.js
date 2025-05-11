import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({limit:'10mb'}));
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

console.log("Registering auth routes...");
app.use("/api/auth", authRoutes);
console.log("Registering message routes...");
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production"){
    console.log("Setting static files for production...");
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    console.log("Registering wildcard route...");
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

server.listen(PORT, () => {
    console.log("server is running on PORT:" + PORT);
    connectDB();
});