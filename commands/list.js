import { currentWorkingDirectory, fs } from "../utils/shared.js";

export function list() {
  const fileData = fs
    .readFileSync(currentWorkingDirectory + "todo.md")
    .toString();
  let data = fileData.split("\n");
  data = data.filter((item) => item !== "");

  if (data.length === 0) {
    console.log("There are no pending todos!");
  }

  data.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}
