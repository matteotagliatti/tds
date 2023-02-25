import { currentWorkingDirectory, fs } from "../utils/shared.js";

export function deleteTodo(index) {
  const deleteIndex = index;
  const fileData = fs
    .readFileSync(currentWorkingDirectory + "todo.md")
    .toString();
  let data = fileData.split("\n");
  data = data.filter((item) => item !== "");

  if (deleteIndex > data.length || deleteIndex <= 0) {
    console.log(`Error: todo ${deleteIndex}. does not exist`);
  } else {
    data.splice(deleteIndex - 1, 1);
    fs.writeFileSync(currentWorkingDirectory + "todo.md", data.join("\n"));
    console.log(`Deleted todo ${deleteIndex}.`);
  }
}
