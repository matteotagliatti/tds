#! /usr/bin/env node
import { program } from "commander";
import { list } from "./commands/list.js";
import { add } from "./commands/add.js";
import { deleteTodo } from "./commands/delete.js";

program
  .command("list", { isDefault: true })
  .description("List all the open todos")
  .action(list);

program.command("add").description("Add a new todo").action(add);

program
  .command("delete <index>")
  .description("Delete a todo via his index")
  .action(deleteTodo);

program.parse();
