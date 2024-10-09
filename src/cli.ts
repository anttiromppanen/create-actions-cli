#!/usr/bin/env node

import { dependenciesToDetect } from "./utils/dependenciesToDetect";
import detectGitRepo from "./utils/detectGitRepo";
import readPackageJson from "./utils/readPackageJson";

const gitBranches = detectGitRepo();
console.log(gitBranches);

// Read the package.json file and check for matching dependencies
(async () => {
  const dependenciesFromPackageJson = (await readPackageJson()) as {
    dependencies: Record<string, string>;
    devDependencies: Record<string, string>;
  };

  const dependencies = Object.keys(dependenciesFromPackageJson.dependencies);
  const devDependencies = Object.keys(
    dependenciesFromPackageJson.devDependencies,
  );

  const allDependencies = [...dependencies, ...devDependencies];

  const matchingDependencies = allDependencies.filter((dep) =>
    dependenciesToDetect.includes(dep),
  );
  console.log(matchingDependencies);
})();
