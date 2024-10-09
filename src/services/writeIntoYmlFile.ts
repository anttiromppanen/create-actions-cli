import fs from "fs";
import writeYamlFile from "write-yaml-file";
import { MOCK_WORKFLOW } from "../const/mockData.const";
import inquirer from "inquirer";
import handleInquiryErrors from "../utils/handleInquiryErrors";

const checkIfFileExists = (filePath: string) => fs.existsSync(filePath);

/**
 * Writes the workflow into a YAML file.
 * @param filePath The path to the file to write the workflow into
 * @param workflow The workflow to write into the file
 * @description Propmpts the user to overwrite the file if it already exists
 */

export default async function writeIntoYmlFile(filePath: string) {
  let promptResult = { overwrite: true };

  // Check if the file already exists, prompt the user to overwrite it
  if (checkIfFileExists(filePath)) {
    console.log(
      `\nThe file ${filePath} already exists. Do you want to overwrite it?`,
    );

    try {
      promptResult = await inquirer.prompt([
        {
          type: "confirm",
          name: "overwrite",
          message: `Overwrite "${filePath}"?`,
          default: false,
        },
      ]);
    } catch (error) {
      handleInquiryErrors(error as Error);
    }
  }

  // If the user doesn't want to overwrite the file, exit the process
  if (!promptResult.overwrite) {
    console.log(`Not overwriting file ${filePath}, exiting...`);
    process.exit(0);
  }

  console.log("\nWriting workflow into a YAML file...");
  writeYamlFile(filePath, MOCK_WORKFLOW).then(() => {
    console.log("done");
  });
}
