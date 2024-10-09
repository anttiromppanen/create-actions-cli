export default function handleInquiryErrors(error: Error) {
  if (
    error instanceof Error &&
    error.message === "User force closed the prompt with 0 null"
  ) {
    console.log("\nClosing the Create GitHub Actions CLI tool...");
    process.exit(0);
  }
  console.error("An error occurred: ", error);
  process.exit(1);
}
