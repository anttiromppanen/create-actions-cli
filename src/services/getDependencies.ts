import { dependenciesToDetect } from "../utils/dependenciesToDetect";
import readPackageJson from "../utils/readPackageJson";

/**
 * Get the dependencies from the package.json file
 * @returns Returns an array of dependencies that match the dependencies to detect
 */

export default async function getDependencies() {
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

  return matchingDependencies;
}
