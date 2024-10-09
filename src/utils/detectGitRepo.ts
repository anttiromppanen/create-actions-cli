const { execSync } = require("child_process");

function detectGitRepo() {
  let branches = [];

  try {
    const isGitRepo = execSync("git rev-parse --is-inside-work-tree", {
      encoding: "utf-8",
    });
    console.log("Is inside Git repository:", isGitRepo.trim() === "true");
  } catch (error: any) {
    console.error("Not a Git repository:", error.message);
    return;
  }

  try {
    branches = execSync("git branch -a", { encoding: "utf-8" });
    console.log("Branches:", branches);
  } catch (error: any) {
    console.error("Error fetching branches:", error.message);
    throw new Error("Error fetching branches");
  }

  return branches;
}

export default detectGitRepo;
