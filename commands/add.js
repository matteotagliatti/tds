import { currentWorkingDirectory, fs } from "../utils/shared.js";

export function add(todo) {
  if (!fs.existsSync(currentWorkingDirectory)) {
    fs.mkdirSync(currentWorkingDirectory);
    fs.writeFileSync(`${currentWorkingDirectory}/todo.md`, "");
    fs.writeFileSync(`${currentWorkingDirectory}/done.md`, "");
  }

  const newTask = todo;
  fs.appendFileSync(`${currentWorkingDirectory}/todo.md`, newTask + "\n");
  console.log(`Added todo: "${newTask}"`);
}
