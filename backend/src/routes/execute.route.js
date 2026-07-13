import express from "express";
import { exec } from "child_process";
import fs from "fs";
import path from "path";

const router = express.Router();

router.post("/", (req, res) => {
  const { language, code } = req.body;

  const tempDir = "./temp";

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  let filename = "";
  let command = "";

  switch (language) {
    case "python":
      filename = path.join(tempDir, "main.py");
      fs.writeFileSync(filename, code);
      command = `py "${filename}"`;
      break;

    case "javascript":
      filename = path.join(tempDir, "main.js");
      fs.writeFileSync(filename, code);
      command = `node "${filename}"`;
      break;

    case "java":
      let javaCode = code
        .replace(/public\s+class\s+Solution/g, "public class Main")
        .replace(/class\s+Solution/g, "class Main");

      filename = path.join(tempDir, "Main.java");

      fs.writeFileSync(filename, javaCode);

      command = `javac "${filename}" && java -cp "${tempDir}" Main`;
      break;
    default:
      return res.status(400).json({
        success: false,
        error: "Unsupported language",
      });
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      return res.json({
        success: false,
        output: stderr || error.message,
      });
    }

    res.json({
      success: true,
      output: stdout,
    });
  });
});

export default router;