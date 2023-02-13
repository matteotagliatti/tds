#! /usr/bin/env node
import { program } from "commander";
import { list } from "./commands/list";
import { add } from "./commands/add";

program
  .command("list", { isDefault: true })
  .description("List all the open todos")
  .action(list);

program.command("add").description("Add a new todo").action(add);
