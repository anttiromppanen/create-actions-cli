import inquirer from "inquirer";
import handleInquiryErrors from "../utils/handleInquiryErrors";

export default async function promptJobs() {
  const jobs = [];
  let wantsToAddJob = { wantsToAddJob: true };

  // Ask if user wants to add a job
  try {
    wantsToAddJob = await inquirer.prompt([
      {
        type: "confirm",
        name: "wantsToAddJob",
        message: "Do you want to add jobs for the workflow? ",
        default: true,
      },
    ]);
  } catch (error) {
    handleInquiryErrors(error as Error);
  }

  if (!wantsToAddJob.wantsToAddJob) {
    console.log("\nNot adding jobs to the workflow.\n");
    return [];
  }

  // Loop to add jobs
  while (true) {
    const job = await inquirer.prompt([
      {
        type: "input",
        name: "jobName",
        message: "Enter job name: ",
      },
      {
        type: "confirm",
        name: "addSteps",
        message: "Do you want to add steps to this job?",
        default: false,
      },
    ]);

    const steps = [];

    // If the user wants to add steps
    if (job.addSteps) {
      while (true) {
        const step = await inquirer.prompt([
          {
            type: "input",
            name: "stepName",
            message: "Enter step name: ",
          },
          {
            type: "input",
            name: "stepAction",
            message: "Enter step action (e.g., `run`, `uses`): ",
          },
          {
            type: "confirm",
            name: "addAnotherStep",
            message: "Do you want to add another step?",
            default: false,
          },
        ]);

        // Store the step
        steps.push({ name: step.stepName, action: step.stepAction });

        // Break the loop if the user does not want to add another step
        if (!step.addAnotherStep) break;
      }
    }

    // Add the job to the jobs array
    jobs.push({ name: job.jobName, steps });

    // Ask if the user wants to add another job
    const addAnotherJob = await inquirer.prompt([
      {
        type: "confirm",
        name: "addAnotherJob",
        message: "Do you want to add another job?",
        default: false,
      },
    ]);

    // Break the loop if the user does not want to add another job
    if (!addAnotherJob.addAnotherJob) break;
  }

  return jobs;
}
