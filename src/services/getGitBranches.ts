const { execSync } = require("child_process");

/**
 * Check if the current directory is a Git repository
 * @returns Returns an error message and exits the process if the current directory is not a Git repository
 */

function isGitRepository() {
  try {
    execSync("git rev-parse --is-inside-work-tree", {
      encoding: "utf-8",
    });
  } catch {
    console.error("No Git repository detected in the current directory");
    process.exit(1);
  }
}

/**
 * Get the local and remote branches of the Git repository
 * @returns Returns an object with the local and remote branches
 */

function getGitBranches() {
  let localBranches = [];
  let remoteBranches = [];

  isGitRepository();

  try {
    localBranches = execSync("git branch --format='%(refname:short)'", {
      encoding: "utf-8",
    });
    remoteBranches = execSync("git branch -r --format='%(refname:short)'", {
      encoding: "utf-8",
    });

    localBranches = localBranches.split("\n").filter(Boolean);
    remoteBranches = remoteBranches.split("\n").filter(Boolean);
  } catch (error: any) {
    console.error("Error fetching branches:", error.message);
  }

  return { localBranches, remoteBranches };
}

export default getGitBranches;
