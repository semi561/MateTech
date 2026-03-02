import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  const PORT = 3000;

  // Real-time Chat & Leaderboard Logic
  const users = new Map();
  const messages: any[] = [];
  const leaderboard = [
    { name: "Andrei M.", points: 1250, level: 15 },
    { name: "Elena P.", points: 1100, level: 12 },
    { name: "Matei S.", points: 950, level: 10 },
    { name: "Ioana D.", points: 880, level: 9 },
    { name: "Cristian V.", points: 720, level: 8 },
  ];

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join", (username) => {
      users.set(socket.id, { name: username, id: socket.id });
      socket.emit("init_messages", messages.slice(-50));
      socket.emit("update_leaderboard", leaderboard);
      io.emit("user_count", users.size);
    });

    socket.on("send_message", (text) => {
      const user = users.get(socket.id);
      if (user) {
        const msg = {
          id: Date.now().toString(),
          user: user.name,
          text,
          timestamp: new Date().toLocaleTimeString(),
        };
        messages.push(msg);
        if (messages.length > 100) messages.shift();
        io.emit("new_message", msg);
      }
    });

    socket.on("disconnect", () => {
      users.delete(socket.id);
      io.emit("user_count", users.size);
    });
  });

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
