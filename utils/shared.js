import os from "os";
import fs from "fs";
const homedir = os.homedir();
const foldername = ".todos";
const currentWorkingDirectory = `${homedir}/${foldername}/`;

export { currentWorkingDirectory, fs };
