#!/usr/bin/env node

import getGitBranches from "./utils/getGitBranches";
import startUi from "./ui/main.ui";

const { localBranches, remoteBranches } = getGitBranches();
console.log(localBranches, remoteBranches);

async function main() {
  // start ui
  const answers = await startUi();
  console.log(answers);
}

main();
