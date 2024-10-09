import inquirer from "inquirer";
import { UI_PROMPT_FIELDS } from "../const/ui.const";
import { PromptQuestionType } from "../types/inquirer.types";
import handleInquiryErrors from "../utils/handleInquiryErrors";
import promptJobs from "./promptJobs.ui";

/**
 * Starts the CLI UI and prompts the user for information about the workflow
 *
 * This function should only handle the UI and not any logic
 * @returns Returns an object with the user's answers
 */

export default async function startUi() {
  console.log("\nWelcome to the Create GitHub Actions CLI tool\n");

  const answers = await inquirer
    .prompt(UI_PROMPT_FIELDS)
    .catch((error) => handleInquiryErrors(error));
  const jobs = await promptJobs();

  const fullWorkflow = { ...answers, jobs };

  return fullWorkflow;
}
