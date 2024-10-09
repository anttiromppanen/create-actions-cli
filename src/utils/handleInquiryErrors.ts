export default function handleInquiryErrors(error: Error) {
  if (
    error instanceof Error &&
    error.message === "User force closed the prompt with 0 null"
  ) {
    console.log("\nClosing the Create GitHub Actions CLI tool...\n");
    process.exit(0);
  }
  console.error("\nAn error occurred: ", error, "\n");
  process.exit(1);
}
