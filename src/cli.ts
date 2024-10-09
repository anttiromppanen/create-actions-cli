#!/usr/bin/env node

import { MOCK_WORKFLOW } from "./const/mockData.const";
import startUi from "./ui/main.ui";
import writeYamlFile from "write-yaml-file";

async function main() {
  // start ui
  // const answers = await startUi();
  // console.log(answers);
  writeYamlFile(".github/workflows/foo.yaml", MOCK_WORKFLOW).then(() => {
    console.log("done");
  });
}

main();
