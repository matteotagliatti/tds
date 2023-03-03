import { currentWorkingDirectory, fs } from "../utils/shared.js";
import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function add() {
  if (!fs.existsSync(currentWorkingDirectory)) {
    fs.mkdirSync(currentWorkingDirectory);
    fs.writeFileSync(`${currentWorkingDirectory}/todo.md`, "");
    fs.writeFileSync(`${currentWorkingDirectory}/done.md`, "");
  }

  const fileData = fs
    .readFileSync(currentWorkingDirectory + "todo.md")
    .toString();

  readline.question(`Write todo --- `, (todo) => {
    fs.writeFileSync(
      currentWorkingDirectory + "todo.md",
      fileData + "\n" + todo
    );
    readline.close();
    console.log(`Added todo: "${todo}"`);
  });
}
