export const MOCK_WORKFLOW = {
  name: "Test Workflow",
  "run-name": "Test Run",
  on: ["push"],
  jobs: {
    "Test-Job": {
      "runs-on": "ubuntu-latest",
      steps: [
        {
          name: "Checkout",
          uses: "actions/checkout@v2",
        },
        {
          name: "Run a one-line script",
          run: "echo Hello, world!",
        },
      ],
    },
  },
};
