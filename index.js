#! /usr/bin/env node
import { program } from "commander";
import { list } from "./commands/list.js";
import { add } from "./commands/add.js";

program
  .command("list", { isDefault: true })
  .description("List all the open todos")
  .action(list);

program.command("add <todo>").description("Add a new todo").action(add);

program.parse();
