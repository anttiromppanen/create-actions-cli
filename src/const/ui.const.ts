import { PromptQuestionType } from "../types/inquirer.types";

export const UI_ON_VALUES = [
  "push",
  "pull_request",
  "create",
  "delete",
  "deployment",
  "deployment_status",
  "fork",
  "gollum",
  "page_build",
  "public",
  "status",
  "workflow_call",
  "workflow_dispatch",
] as const;

/**
 * @description Stores all the UI prompt fields
 */

export const UI_PROMPT_FIELDS: PromptQuestionType = [
  {
    type: "input",
    name: "name",
    message: "Enter name for the workflow: ",
    required: true,
  },
  {
    type: "input",
    name: "run-name",
    message: "Enter name for the run (optional): ",
  },
  {
    type: "checkbox",
    name: "on",
    message: "Select events that trigger the workflow: ",
    choices: UI_ON_VALUES,
  },
];
