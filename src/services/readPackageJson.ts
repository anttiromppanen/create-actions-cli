const fs = require("fs");
const path = require("path");

// Resolve the path to the project's package.json file
const packageJsonPath = path.resolve(process.cwd(), "package.json");

// Read and parse the package.json file
function readPackageJson() {
  return new Promise((resolve, reject) =>
    fs.readFile(packageJsonPath, "utf8", (err: Error, data: any) => {
      if (err) {
        console.error(
          "No package.json found in the current directory. Make sure to have a package.json file in your project root.",
        );
        reject(err);
        process.exit(1);
      } else {
        const { dependencies, devDependencies } = JSON.parse(data);
        resolve({ dependencies, devDependencies });
      }
    }),
  );
}

export default readPackageJson;
