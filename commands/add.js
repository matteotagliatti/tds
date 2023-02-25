import { currentWorkingDirectory, fs } from "../utils/shared.js";

export function add(todo) {
  if (!fs.existsSync(currentWorkingDirectory)) {
    fs.mkdirSync(currentWorkingDirectory);
    fs.writeFileSync(`${currentWorkingDirectory}/todo.md`, "");
    fs.writeFileSync(`${currentWorkingDirectory}/done.md`, "");
  }

  const fileData = fs
    .readFileSync(currentWorkingDirectory + "todo.md")
    .toString();
  fs.writeFileSync(currentWorkingDirectory + "todo.md", fileData + "\n" + todo);

  console.log(`Added todo: "${todo}"`);
}
