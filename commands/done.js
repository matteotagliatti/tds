import { fs, currentWorkingDirectory } from "../utils/shared.js";

export function done(doneIndex) {
  let dateString = new Date().toISOString().substring(0, 10);

  const fileData = fs
    .readFileSync(currentWorkingDirectory + "todo.md")
    .toString();
  const doneData = fs
    .readFileSync(currentWorkingDirectory + "done.md")
    .toString();
  let data = fileData.split("\n");
  data = data.filter((item) => item !== "");

  if (doneIndex > data.length || doneIndex <= 0) {
    console.log(`Error: todo ${doneIndex}. does not exist`);
  } else {
    const done = data.splice(doneIndex - 1, 1);
    fs.writeFileSync(currentWorkingDirectory + "todo.md", data.join("\n"));
    fs.writeFileSync(
      currentWorkingDirectory + "done.md",
      "x " + dateString + " " + done + "\n" + doneData
    );
    console.log(`Todo ${doneIndex}. marked as done.`);
  }

  process.exit();
}
