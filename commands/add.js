import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".todos";

export function add() {
  if (!fs.existsSync(`${homedir}/${foldername}`)) {
    fs.mkdirSync(`${homedir}/${foldername}`);
    fs.writeFileSync(`${homedir}/${foldername}/todos.json`, "[]");
  }
}
