#!/usr/bin/env node

import { MOCK_WORKFLOW } from "./const/mockData.const";
import writeIntoYmlFile from "./services/writeIntoYmlFile";
import startUi from "./ui/main.ui";
import writeYamlFile from "write-yaml-file";

async function main() {
  // start ui
  const answers = await startUi();
  console.log(answers);
}

main();
