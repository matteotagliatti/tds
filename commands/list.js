import { currentWorkingDirectory, fs } from "../utils/shared.js";

export function list(file = "todo") {
  const fileData = fs
    .readFileSync(
      currentWorkingDirectory + (file === "todo" ? "todo.md" : "done.md")
    )
    .toString();
  let data = fileData.split("\n");
  data = data.filter((item) => item !== "");

  if (data.length === 0) {
    console.log("There are no pending todos!");
  }

  data.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });

  process.exit();
}
