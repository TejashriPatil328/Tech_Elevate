import express from "express";
import path from "path";
import cors from "cors";
import { exec } from "child_process";
import { serve } from "inngest/express";
import { clerkMiddleware } from "@clerk/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";

import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoute.js";
import userRoutes from "./routes/userRoutes.js";
import executeRoute from "./routes/execute.route.js";

const app = express();

app.use(express.json());


const __dirname = path.resolve();

// middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()
app.use("/api/execute", executeRoute);
// app.use("/api/inngest", serve({ client: inngest, functions }));

app.use(
  "/api/inngest",
  (req, res, next) => {
    
    next();
  },
  serve({ client: inngest, functions })
);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server", error);
  }
};

exec("java -version", (err, stdout, stderr) => {
  console.log("JAVA:", stdout || stderr);
});

exec("javac -version", (err, stdout, stderr) => {
  console.log("JAVAC:", stdout || stderr);
});

const pythonCommand = process.platform === "win32" ? "python" : "python3";

exec(`${pythonCommand} --version`, (err, stdout, stderr) => {
  console.log("PYTHON:", stdout || stderr);
});

exec("node -v", (err, stdout, stderr) => {
  console.log("NODE:", stdout || stderr);
});

startServer();


